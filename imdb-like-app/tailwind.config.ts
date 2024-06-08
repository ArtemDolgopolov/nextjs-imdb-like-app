import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      flex: {
        full: '0 0 100%'
      },
      zIndex: {
       '100': '100',
     },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
   // plugin(function ({ addUtilities }: { addUtilities: Function }) {
   //   addUtilities({
   //     '.scrollbar-hide': {
   //       '-ms-overflow-style': 'none',
   //       'scrollbar-width': 'none',
   //       '&::-webkit-scrollbar': {
   //         display: 'none'
   //       }
   //     }
   //   }
   //   )
   // }),
   require('flowbite/plugin'),
   require('tailwind-scrollbar-hide')
 ],
}

export default config
