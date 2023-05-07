module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      'sm': ['0.875rem', {
        lineHeight: '1.5',
        fontWeight: '400'
      }],
      'base': ['1rem', {
        lineHeight: '1.5',
        fontWeight: '400'
      }],
      'xl': ['1.25rem', {
        lineHeight: '1.2',
        fontWeight: '900'
      }],
      '3xl': ['2rem', {
        lineHeight: '1.2',
        fontWeight: '900'
      }],
      '5xl': ['3rem', {
        lineHeight: '1.2',
        fontWeight: '900'
      }],
      '7xl': ['5rem', {
        lineHeight: '1.2',
        fontWeight: '900'
      }],
      '9xl': ['7.5rem', {
        lineHeight: '1.2',
        fontWeight: '900'
      }],
      // '': ['rem', {
      //   lineHeight: '',
      //   fontWeight: ''
      // }],
    },
    fontFamily: {
      'sans': ['Noto Sans TC', 'ui-sans-serif']
    },
    screens: {
      'md': '768px',
      'lg': '1296px'
    },
    extend: {
      spacing: {
        '2.4': '9.6px',
        '25': '100px',
        '30': '120px'
      },
      colors: {
        'bg': '#020202'
      },
      keyframes: {
        flyout: {
          "0%": { transform: 'translateY(100%)'},
          "45%": { transform: 'translateY(100%)'},
          "60%": { transform: 'translateY(0%)'},
          "92%": { transform: 'translateY(0%)'},
          "100%": { transform: 'translateY(-100%)'}
        },
        "flyout-1": {
          "0%": { transform: 'translateY(100%)'},
          "45%": { transform: 'translateY(100%)'},
          "60%": { transform: 'translateY(0%)'},
          "90%": { transform: 'translateY(0%)'},
          "100%": { transform: 'translateY(-100%)'}
        },
        "flyout-2": {
          "0%": { transform: 'translateY(100%)'},
          "45%": { transform: 'translateY(100%)'},
          "60%": { transform: 'translateY(0%)'},
          "86%": { transform: 'translateY(0%)'},
          "100%": { transform: 'translateY(-100%)'}
        },
        "marquee": {
          "0%": { transform: 'translateX(100%)'},
          "100%": {transform: 'translateX(-100%)'},
        }
      },
      animation: {
        "flyout": 'flyout 3s cubic-bezier(0.05,0.05,1,1) 1s infinite',
        "flyout-1": 'flyout-1 3s cubic-bezier(0.05,0.05,1,1) 0.88s infinite',
        "flyout-2": 'flyout-2 3s cubic-bezier(0.05,0.05,1,1) 0.76s infinite',
        "marquee": 'marquee 12s linear 1s infinite'
      }
    }
  },
  plugins: [],
}
