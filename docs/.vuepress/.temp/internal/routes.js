export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/muhamad/Documents/work/personal-page/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Muhamad Barzani - Personal Website"} }],
  ["/projects.html", { loader: () => import(/* webpackChunkName: "projects.html" */"/home/muhamad/Documents/work/personal-page/docs/.vuepress/.temp/pages/projects.html.js"), meta: {"title":"Projects & Experience"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/muhamad/Documents/work/personal-page/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
