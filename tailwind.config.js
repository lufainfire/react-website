/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Add all your file extensions here
  ],
  theme: {
    extend: {
      backgroundImage: {
      'volleyball': "url('C:/Users/lufai/Documents/GitHub/react-website/src/img/Volleyball.png')",
      'volleyball2': "url('C:/Users/lufai/Documents/GitHub/react-website/src/img/Volleyball2.jpg')",
      'logo': "url('C:/Users/lufai/Documents/GitHub/react-website/src/img/Volleyball_United_logo.png')",
      'logo2': "url('C:/Users/lufai/Documents/GitHub/react-website/src/img/logo2.png')",
      'logo3': "url('C:/Users/lufai/Documents/GitHub/react-website/src/img/logo3.png')",
      'page': "url('C:/Users/lufai/Documents/GitHub/react-website/src/img/page1.png')",
      'page2': "url('C:/Users/lufai/Documents/GitHub/react-website/src/img/page2.png')"
    }
    },
  },
  plugins: [
  ],
}

