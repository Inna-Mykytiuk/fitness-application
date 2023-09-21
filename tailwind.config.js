/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem'
      },
      width: {
        150: '150px',
        170: '170px',
        190: '190px',
        225: '225px',
        240: '240px',
        260: '260px',
        275: '275px',
        300: '300px',
        340: '340px',
        350: '350px',
        375: '375px',
        460: '460px',
        510: '510px',
        656: '656px',
        880: '880px',
        508: '508px',
      },
      height: {
        80: '80px',
        150: '150px',
        225: '225px',
        250: '250px',
        300: '300px',
        340: '340px',
        370: '370px',
        420: '420px',
        510: '510px',
        600: '600px',
        650: '650px',
        685: '685px',
        800: '800px',
        900: '900px',
        '90vh': '90vh',
      },
      minWidth: {
        210: '210px',
        350: '350px',
        620: '620px',
      },
      screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
        // sm: '640px',
        // md: '768px',
        // mdX: '912px',
        // mdXX: '913px',
        // lg: '1024px',
        // xl: '1280px',
        // xlL: '1366px',
        // xlM: '1440px',
        // xxM: '1920px',
        // xxL: '2304px',
        // xxx: '2560px',
        // '2xl': '1736px',
        // '3xl': '2880px'
      },
      colors: {
        mainGray: '#181716',
        mainWhite: '#ffffff',

        gray20: "#F8F4EB",
        gray50: "#EFE6E6",
        gray100: "#DFCCCC",
        gray500: "#5E0000",

        primary100: "#FFE1E0",
        primary300: "#FFA6A3",
        primary500: "#FF6B66",
        secondary400: "#FFCD5B",
        secondary500: "#FFC132",

        rose800: "5c0003",

        mainColor: '#4B4453',
        mainTextColor: '#4B445390',
        mainTextGrey: '#c3c5c9',
        mainBlack: '#2e2e2e',
        headingColor: '#845EC2',

        hoverColor: '#B39CD080',
        hoverColorShadow: '0 2px 6px 0 grey',
        headerBgColor: 'rgb(237, 230, 245)',
        textColor: '#515151',
        cartNumBg: '#e80013',
        
        cardOverlay: 'rgba(256,256,256,0.4)',
        lighttextGray: '#9ca0ab',
        card: 'rgba(256,256,256,0.8)',
        cartBg: '#282a2c',
        cardGray: '#343538',
      },
      backgroundImage: (theme) => ({
        gradientYellowred: "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        mobileHome: "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
      content: {
        evolvetext: "url('./src/assets/EvolveText.png')",
        abstractwaves: "url('./src/assets/AbstractWaves.png')",
        sparkles: "url('./src/assets/Sparkles.png')",
        circles: "url('./src/assets/Circles.png')",
      },
      
      
    },
    
  },
  
  plugins: ['tailwind-scrollbar'],
};

