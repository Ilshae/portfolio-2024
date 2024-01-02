// import { useState } from "react"
import styled from "styled-components"
import Logo from "./Logo.tsx"
import Links from "./Links.tsx"
import { useEffect, useState } from "react"
import { CommonContainer } from "../styles.ts"
import HamburgerButton from "./HamburgerButton.tsx"

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
        <Logo isOpen={isOpen} setIsOpen={setIsOpen} />
        <Links isOpen={isOpen} setIsOpen={setIsOpen} />
        <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </NavContainer>
    </Header>
  )
}

const Header = styled.nav<{ $showShadow: boolean; $isOpen: boolean }>`
  height: 60px;
  line-height: 60px;
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
`

const NavContainer = styled(CommonContainer)`
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
`

export default Navbar
