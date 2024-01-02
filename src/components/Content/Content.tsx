import { menuAnchors } from "../Navbar/common.ts"
import { Element } from "react-scroll"
import styled from "styled-components"

const Content = () => {
  return (
    <div>
      <StyledElement name={menuAnchors.home}>Home</StyledElement>
      <StyledElement name={menuAnchors.about}>About</StyledElement>
      <StyledElement name={menuAnchors.work}>Work</StyledElement>
      <StyledElement name={menuAnchors.contact}>Contact</StyledElement>
    </div>
  )
}

const StyledElement = styled(Element)`
  height: 600px;
`

export default Content
