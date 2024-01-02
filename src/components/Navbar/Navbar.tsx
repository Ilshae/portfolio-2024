// import { useState } from "react"
import styled from "styled-components"
import Logo from "./Logo.tsx"
import Links from "./Links.tsx"

const Navbar = () => {
  // only mobile has closeable menu
  // const [isOpen, setIsOpen] = useState(false)
  //
  // isOpen
  //   ? (document.body.style.overflow = "hidden")
  //   : (document.body.style.overflow = "auto")

  return (
    <Nav>
      <Logo />
      <Links />
    </Nav>
  )
}

const Nav = styled.nav`
  height: 60px;
  line-height: 60px;
  position: sticky;
  z-index: 99;
`

export default Navbar
