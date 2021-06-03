import { createGlobalStyle } from 'styled-components'

export const GlobalIconfont = createGlobalStyle`
  @font-face {
  font-family: 'iconfont';  /* Project id 2586327 */
  src: url('//at.alicdn.com/t/font_2586327_s63ry8c6g2o.woff2?t=1622612730423') format('woff2'),
       url('//at.alicdn.com/t/font_2586327_s63ry8c6g2o.woff?t=1622612730423') format('woff'),
       url('//at.alicdn.com/t/font_2586327_s63ry8c6g2o.ttf?t=1622612730423') format('truetype');
}

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
