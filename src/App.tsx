import { Theme, theme } from "./theme.ts"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { FC, lazy, Suspense } from "react"
import Loading from "./components/Loading/Loading.tsx"
import { CommonContainer } from "./components/styles.ts"
import Footer from "./components/Footer/Footer.tsx"

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
        <Footer />
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
