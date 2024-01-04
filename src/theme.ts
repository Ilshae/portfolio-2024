export type Theme = {
  [key: string]: Theme
}

export const theme = {
  color: {
    white: "#ffffff",
    grey: "#747474",
    pink: "#ff006a",
    black: "#1e1e1e",
  },
  container: {
    maxWidth: "1900px",
    margin: {
      desktop: "0 100px",
      laptopL: "0 80px",
      laptop: "0 20px",
      tablet: "0 20px",
      mobileM: "0 20px",
    },
  },
  fontFamily: "'Noto Sans', sans-serif",
  fontSize: {
    s: "14px",
    m: "16px",
    l: "20px",
    xl: "24px",
    xl2: "32px",
    xl3: "40px",
    xl4: "44px",
  },
  screenSize: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "1980px",
    desktopL: "2560px",
  },
}

export const device = {
  mobileS: `(max-width: ${theme.screenSize.mobileS})`,
  mobileM: `(max-width: ${theme.screenSize.mobileM})`,
  mobileL: `(max-width: ${theme.screenSize.mobileL})`,
  tablet: `(max-width: ${theme.screenSize.tablet})`,
  laptop: `(max-width: ${theme.screenSize.laptop})`,
  laptopL: `(max-width: ${theme.screenSize.laptopL})`,
  desktop: `(max-width: ${theme.screenSize.desktop})`,
  desktopL: `(min-width: ${theme.screenSize.desktop})`,
}
