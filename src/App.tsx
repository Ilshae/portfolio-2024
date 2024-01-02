import { Theme, theme } from "./theme.ts"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { FC } from "react"

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      dupa
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    font-family: ${({ theme }) => theme.fontFamily.text};
    line-height: 1.7;
    overflow-x: hidden;
  }
`

export default App
