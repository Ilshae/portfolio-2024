import { Element } from "react-scroll"
import { menuAnchors } from "../Navbar/common.ts"
import styled from "styled-components"
import Skills from "./Skills/Skills.tsx"
import Abilities from "./Abilities/Abilities.tsx"

const About = () => {
  return (
    <StyledElement name={menuAnchors.about}>
      <Skills />
      <Abilities />
    </StyledElement>
  )
}

const StyledElement = styled(Element)`
  padding-bottom: 32px;
  text-align: center;
`

export default About
