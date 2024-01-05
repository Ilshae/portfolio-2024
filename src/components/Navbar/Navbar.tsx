import styled from "styled-components"
import Logo from "./Logo.tsx"
import Links from "./Links.tsx"
import { useEffect, useState } from "react"
import { CommonContainer } from "../styles.ts"
import HamburgerButton from "./HamburgerButton.tsx"
import { navbarHeight } from "./common.ts"
import { device } from "../../theme.ts"

const Navbar = () => {
  // only mobile has closeable menu
  const [isOpen, setIsOpen] = useState(false)

  isOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto")

  const [offset, setOffset] = useState(0)
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY)
    // clean up code
    window.removeEventListener("scroll", onScroll)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <Header $showShadow={offset > 60} $isOpen={isOpen}>
      <NavContainer>
        <Logo setIsOpen={setIsOpen} />
        <Links isOpen={isOpen} setIsOpen={setIsOpen} />
        <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </NavContainer>
    </Header>
  )
}

const Header = styled.nav<{ $showShadow: boolean; $isOpen: boolean }>`
  height: ${navbarHeight.desktopL};
  line-height: ${navbarHeight.desktopL};
  position: sticky;
  top: 0;
  z-index: 99;
  transition: all 0.3s;
  box-shadow: ${({ $showShadow }) =>
    $showShadow ? "0 1px 10px 1px rgb(150 150 150 / 50%)" : "unset"};
  background-color: ${({ $isOpen, theme }) =>
    $isOpen ? theme.color.black : theme.color.white};
  color: ${({ $isOpen, theme }) =>
    $isOpen ? theme.color.white : theme.color.black};

  @media ${device.desktop} {
    height: ${navbarHeight.desktop};
    line-height: ${navbarHeight.desktop};
  }

  @media ${device.tablet} {
    height: ${navbarHeight.tablet};
    line-height: ${navbarHeight.tablet};
  }
`

const NavContainer = styled(CommonContainer)`
  height: ${navbarHeight.desktopL};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.desktop} {
    height: ${navbarHeight.desktop};
  }

  @media ${device.tablet} {
    height: ${navbarHeight.tablet};
  }
`

export default Navbar
