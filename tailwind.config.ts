import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        primary: 'var(--primary)',
        'primary-press': 'var(--primary-press)',
        pill: 'var(--pill)',
        blue: 'var(--blue)',
        warning: 'var(--warning)'
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans Thai', 'Noto Sans', 'sans-serif']
      },
      boxShadow: {
        subtle: '0 1px 2px rgba(0,0,0,.06)',
        elevated: '0 8px 24px rgba(0,0,0,.08)'
      },
      borderRadius: {
        card: '14px',
        input: '12px',
        cta: '24px'
      }
    }
  },
  plugins: []
}

export default config
