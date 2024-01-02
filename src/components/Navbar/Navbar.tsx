import { useState } from "react"
import styled from "styled-components"

const Navbar = () => {
  // only mobile has closeable menu
  const [isOpen, setIsOpen] = useState(false)

  isOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto")

  return <Nav></Nav>
}

const Nav = styled.nav`
  height: 60px;
  line-height: 60px;
  position: sticky;
  z-index: 99;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.title};
`

export default Navbar
