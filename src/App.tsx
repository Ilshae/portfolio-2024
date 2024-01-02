import { Theme, theme } from "./theme.ts"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { FC, lazy, Suspense } from "react"
import Loading from "./components/Loading/Loading.tsx"
import Content from "./components/Content/Content.tsx"

const Navbar = lazy(() => import("./components/Navbar/Navbar.tsx"))

const App: FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Content />
      </ThemeProvider>
    </Suspense>
  )
}

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    font-family: ${({ theme }) => theme.fontFamily};
    line-height: 1.7;
    overflow-x: hidden;
    color: ${({ theme }) => theme.color.black};
    margin: 0;
  }
`

export default App

/* TODO:
- po skrolowaniu w dół pojawia się cień pod navbarem
- animacje i podkreślenia pod indywidualnymi przyciskami anchorów
- coś jest nie tak z czcionka noto-sans
 */
