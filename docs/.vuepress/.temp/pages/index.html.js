import comp from "/home/muhamad/Documents/work/personal-page/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Muhamad Barzani - Personal Website\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":false,\"layout\":\"Layout\",\"title\":\"Muhamad Barzani - Personal Website\",\"pageClass\":\"custom-page-class\"},\"headers\":[],\"git\":{\"contributors\":[{\"name\":\"MuhamadBarzani\",\"username\":\"MuhamadBarzani\",\"email\":\"barzandolamari3@gmail.com\",\"commits\":1,\"url\":\"https://github.com/MuhamadBarzani\"}],\"changelog\":[{\"hash\":\"fefd81361b87c9b629cb94f1640d4f747b8f33b8\",\"time\":1759162021000,\"email\":\"barzandolamari3@gmail.com\",\"author\":\"MuhamadBarzani\",\"message\":\"init\"}]},\"filePathRelative\":\"README.md\"}")
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
