export const themeData = JSON.parse("{\"logo\":\"/assets/image.png\",\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Projects\",\"link\":\"/get-started\"},{\"text\":\"About\",\"link\":\"/#about-me\"},{\"text\":\"Skills\",\"link\":\"/#skills-interests\"},{\"text\":\"Contact\",\"link\":\"/#contact\"}],\"sidebar\":false,\"repo\":\"MuhamadBarzani\",\"repoLabel\":\"GitHub\",\"editLink\":false,\"footer\":\"© 2025 Muhamad Barzani. All rights reserved.\",\"displayFooter\":true,\"home\":false,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
