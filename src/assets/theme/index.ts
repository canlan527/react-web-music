const theme = {
  color: {
    primary: '#c20c0c',
    secondary: '#62BF82',
    tertiary: '#424242',
    quaternary: '',
  },
  size: {
    normal: '16px',
    mini: '14px',
    large: '22px',
  },
  mixin: {
    wrapv1: `
      width: 1100px;
      margin: 0 auto;
    `,
    flexCenter: `
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    flexSpaceAround: `
      display: flex;
      justify-content: space-around;
      align-items: center;
    `,
    flexSpaceBetween: `
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
  },
}

export default theme
