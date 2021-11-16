import { createGlobalStyle } from 'styled-components'

export const GlobalIconfont = createGlobalStyle`
  @font-face {
    font-family: 'iconfont';  /* Project id 2586327 */
    src: url('//at.alicdn.com/t/font_2586327_28py0yx0mre.woff2?t=1622797491983') format('woff2'),
        url('//at.alicdn.com/t/font_2586327_28py0yx0mre.woff?t=1622797491983') format('woff'),
        url('//at.alicdn.com/t/font_2586327_28py0yx0mre.ttf?t=1622797491983') format('truetype');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
