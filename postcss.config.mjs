import UnoCSS from '@unocss/postcss';
import autoprefixer from 'autoprefixer';
import postcssNested from 'postcss-nested';
import cssnano from 'cssnano';


export default {
  syntax: 'postcss-scss',
  parser: 'postcss-scss',
  plugins: [
    autoprefixer(),
    postcssNested(),
    UnoCSS(),
    cssnano({
      preset: 'default',
    })
  ],
}
