import { theme } from "./theme.ts"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { FC } from "react"

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    dupa
  </ThemeProvider>
)

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  body {
    font-family: ${({ theme }) => theme.fontFamily.text};
    line-height: 1.7;
    overflow-x: hidden;
  }
`
export default App
