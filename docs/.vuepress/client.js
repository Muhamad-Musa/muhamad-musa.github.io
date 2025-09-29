import { defineClientConfig } from '@vuepress/client'
import PersonalWebsite from './components/PersonalWebsite.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('PersonalWebsite', PersonalWebsite)
  },
  setup() {
    // Any client-side setup can go here
  },
  rootComponents: []
})