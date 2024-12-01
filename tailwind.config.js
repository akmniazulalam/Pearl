/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'headerColor': 'rgba(0, 32, 64, .65)',
        'iconColor': '#ff694e',
        'btnColor': '#58c746',
        'counterBgColor': '#58c747',
        'serviceBgColor': '#f6f7f8',
        'dropdownColor': '#002040',
        'menuColor': '#00FF09',
        'servicePColor': '#999999',
        'borderColor': '#ff694e',
        'italicFontColor': '#808080',
        'footerTextColor': '#8090A0',
        'linkColor': '#b2b2b2',
        'chaiColor': '#78818af1',
        'addressColor': '#FFFFFFB3',
        'socialIconColor': 'rgba(255, 255, 255, 0.575);',
        'backColor': 'rgba(0,0,0,0.4)',
      },
      maxWidth: {
        'mainContainer': '1040px',
      },
      fontFamily: {
        'rubik': ['Rubik'],
        'oxygen': ["Oxygen"],
      },
      backgroundImage: {
        'bgImg': "url('/src/assets/slide_1.jpg')",
        'bgImgThree': "url('/src/assets/header_bg_1.jpg')",
        'bgImgFour': "url('/src/assets/header_bg_13.jpg')",
        'bgImgFive': "url('/src/assets/header_bg_9.jpg')",
        'bgImgSix': "url('/src/assets/header_bg_10.jpg')",
        'bgImgSeven': "url('/src/assets/header_bg_4.jpg')",
        'FixedBgImg': "url('/src/assets/1.jpg')",
        'BgImgTwo': "url('/src/assets/header_bg_2.jpg')",
        'requestBgImg': "url('/src/assets/8.jpg')",
      },
      lineHeight: {
        '90': '90px',
        '36': '36px',
        '30': '30px',
        '24': '24px',
        '30': '30px',
      }
    },
  },
  plugins: [],
}

