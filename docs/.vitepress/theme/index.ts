import DefaultTheme from "vitepress/theme"

import HwIcon from "@hw/components/icon"
import "@hw/theme-chalk/src/index.scss"

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(HwIcon) // 在VitePress中注册全局组件
  }
}