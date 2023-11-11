/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', 'system-ui'],
    },
    extend: {
      colors: {
        primary: '#1c4f82',
        primary_focus: '#163d64',
        primary_content: '#d2d9e5',
        secondary: '#7d919b',
        secondary_focus: '#6a808a',
        secondary_content: '#1c1f21',
        accent: '#eb6b47',
        accent_focus: '#e75127',
        accent_content: '#2e1a14',
        neutral: '#23282f',
        neutral_focus: '#14171a',
        base_100: '#212121',
        base_200: '#0f0f0f',
        base_300: '#000000',
        base_content: '#cccccc',
        info: '#0092d6',
        info_content: '#d9e8f7',
        success: '#6cb288',
        success_content: '#1a231d',
        warning: '#daad58',
        warning_content: '#2b2317',
        error: '#ab3d30',
        error_content: 'f3d8d2',
      },
    },
  },
  plugins: [],
}

