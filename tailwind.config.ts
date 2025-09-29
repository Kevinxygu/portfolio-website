import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // Add these if you're using src directory
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'palette-dark-green': '#061F20',
        'palette-tan': '#DDD8CA',
        'palette-light-green': '#DAF1DE',
        'palette-medium-green': '#8EB69B',
        
        // Alternative approach - create a palette object
        palette: {
          'dark-green': '#061F20',
          'tan': '#DDD8CA',
          'light-green': '#DAF1DE',
          'medium-green': '#8EB69B',
        }
      },
      fontFamily: {
        'ibm-plex-sans': ['var(--font-ibm-plex-sans)', 'sans-serif'],
        'ibm-plex-mono': ['var(--font-ibm-plex-mono)', 'monospace'],
      }
    },
  },
  plugins: [],
}

export default config