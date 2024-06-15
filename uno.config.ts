import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTagify,
  presetTypography,
  presetUno,
  presetWebFonts,
  presetWind,
  transformerCompileClass,
  transformerDirectives,
} from 'unocss';

import { presetCatppuccin } from 'unocss-catppuccin';

export default defineConfig({
  content: {
    filesystem: [
      '**/*.{html,scss}',
    ],
  },
  shortcuts: [
    // ...
  ],

  presets: [
    presetUno(),
    presetAttributify(),
    presetTagify(),
    presetWind(),
    presetIcons({
      autoInstall: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        alata: "Alata",
        jetbrains: "JetBrains Mono",
      },
      provider: "bunny",
    }),
    presetCatppuccin({
      mode: "extend",
      prefix: "puccin",
      defaultFlavour: "mocha"
    })
  ],
  transformers: [
    transformerDirectives(),
    transformerCompileClass(),
  ],
})
