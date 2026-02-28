import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'The Cashu Book',
  description: 'Building with Cashu: Practical Ecash for Bitcoin Developers',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Outline', link: '/book-outline' },
      { text: 'Chapter 1', link: '/chapters/01-the-problem-space' }
    ],

    sidebar: [
      {
        text: 'Book',
        items: [
          { text: 'Table of Contents', link: '/book-outline' }
        ]
      },
      {
        text: 'Part I — Why Cashu Exists',
        items: [
          { text: 'Chapter 1 — The Problem Space', link: '/chapters/01-the-problem-space' },
          { text: 'Chapter 2 — What Cashu Is (and Is Not)', link: '/chapters/02-what-cashu-is-and-is-not' },
          { text: 'Chapter 3 — Core Mental Model', link: '/chapters/03-core-mental-model' }
        ]
      },
      {
        text: 'Part II — Building Blocks',
        items: [
          { text: 'Chapter 4 — Protocol Primitives', link: '/chapters/04-protocol-primitives' },
          { text: 'Chapter 5 — Mint API Deep Dive', link: '/chapters/05-mint-api-deep-dive' },
          { text: 'Chapter 6 — Wallet Architecture', link: '/chapters/06-wallet-architecture' },
          { text: 'Chapter 7 — Lightning Integration', link: '/chapters/07-lightning-integration' },
          { text: 'Chapter 8 — Security Engineering', link: '/chapters/08-security-engineering' },
          { text: 'Chapter 9 — Privacy Engineering', link: '/chapters/09-privacy-engineering' },
          { text: 'Chapter 10 — Interoperability & Standards', link: '/chapters/10-interoperability-standards' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Egge21M/thecashubook' }
    ]
  }
})
