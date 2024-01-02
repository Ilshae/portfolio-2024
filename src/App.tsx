import { Theme, theme } from "./theme.ts"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { FC, lazy, Suspense } from "react"
import Loading from "./components/Loading/Loading.tsx"

const Navbar = lazy(() => import("./components/Navbar/Navbar.tsx"))

const App: FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
      </ThemeProvider>
    </Suspense>
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
