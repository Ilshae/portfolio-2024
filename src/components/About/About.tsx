import { Element } from "react-scroll"
import { menuAnchors } from "../Navbar/common.ts"
import styled from "styled-components"
import Skills from "./Skills/Skills.tsx"
import Abilities from "./Abilities/Abilities.tsx"

const About = () => {
  return (
    <StyledElement name={menuAnchors.about}>
      <h1>About</h1>
      <Skills />
      <Abilities />
    </StyledElement>
  )
}

const StyledElement = styled(Element)`
  padding-bottom: 32px;
  text-align: center;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xl4};
    margin: 32px 0;
  }
`

export default About
