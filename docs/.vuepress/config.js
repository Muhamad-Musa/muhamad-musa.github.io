import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Muhamad Barzani',
  description: 'Personal Website - Software Engineer | Frontend Developer | 3D Designer',

  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }],
  ],

  theme: defaultTheme({
    logo: '/assets/image.png',
    
    navbar: [
      { text: 'Home', link: '/' },
  { text: 'Projects', link: '/projects' },
      { text: 'About', link: '/#about-me' },
      { text: 'Skills', link: '/#skills-interests' },
      { text: 'Contact', link: '/#contact' }
    ],

    sidebar: false,

  // Social links
  // Removed `repo` and `repoLabel` to hide the GitHub button in the navbar

  // Edit links
  editLink: false,

  // Disable git metadata in page footer
  lastUpdated: false,
  contributors: false,

    // Footer
    footer: '© 2025 Muhamad Barzani. All rights reserved.',
    displayFooter: true,

    // Disable home page features
    home: false,
  }),

  bundler: viteBundler(),
})
