import { Theme, theme } from "./theme.ts"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { FC, lazy, Suspense } from "react"
import Loading from "./components/Loading/Loading.tsx"
import { CommonContainer } from "./components/styles.ts"

const Navbar = lazy(() => import("./components/Navbar/Navbar.tsx"))
const Hero = lazy(() => import("./components/Hero/Hero.tsx"))
const About = lazy(() => import("./components/About/About.tsx"))
const Work = lazy(() => import("./components/Work/Work.tsx"))
const Contact = lazy(() => import("./components/Contact/Contact.tsx"))

const App: FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Container>
          <Hero />
          <About />
          <Work />
          <Contact />
        </Container>
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

const Container = styled(CommonContainer)`
  padding: 32px 0;
`

export default App

/* TODO:
- po skrolowaniu w dół pojawia się cień pod navbarem
- animacje i podkreślenia pod indywidualnymi przyciskami anchorów
- coś jest nie tak z czcionka noto-sans
- dodaj style slide bottom, to jest animacja przy renderowaniu strony
- brak animacji pojawiania się linkow
- home nie jest automatycznie podświetlony
- common style
 */
