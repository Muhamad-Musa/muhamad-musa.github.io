import comp from "/home/muhamad/Documents/work/personal-page/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Muhamad Barzani - Personal Website\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":false,\"layout\":\"Layout\",\"title\":\"Muhamad Barzani - Personal Website\",\"pageClass\":\"custom-page-class\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
