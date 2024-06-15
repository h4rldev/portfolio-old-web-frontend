@default:
  just --list

@watch file_arg="":
  watchexec -w css/in/{{file_arg}}.scss just build {{file_arg}}

@build file_arg="":
  postcss "css/in/{{file_arg}}.scss" -o "css/out/{{file_arg}}.css"

@dev:
  chmod +x ./portfolio-old-bin
  ./portfolio-old-bin
