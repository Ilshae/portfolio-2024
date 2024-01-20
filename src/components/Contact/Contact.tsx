import { Element } from "react-scroll"
import { menuAnchors } from "../Navbar/common.ts"
import styled from "styled-components"
import { H2Title } from "../styles.ts"

const Contact = () => {
  return (
    <StyledElement name={menuAnchors.contact}>
      <H2Title>Contact</H2Title>
    </StyledElement>
  )
}

const StyledElement = styled(Element)`
  padding-bottom: 32px;
  text-align: center;
`

export default Contact
