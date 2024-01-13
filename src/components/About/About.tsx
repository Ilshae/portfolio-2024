import { Element } from "react-scroll"
import { menuAnchors } from "../Navbar/common.ts"
import styled from "styled-components"
import Skills from "./Skills/Skills.tsx"
import Abilities from "./Abilities/Abilities.tsx"
import Work from "./Work/Work.tsx"
import { device } from "../../theme.ts"

const About = () => {
  return (
    <StyledElement name={menuAnchors.about}>
      <h1>About</h1>
      <Skills />
      <Abilities />
      <Work />
    </StyledElement>
  )
}

const StyledElement = styled(Element)`
  padding-bottom: 32px;
  text-align: center;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xl5};
    margin: 96px 0 32px 0;

    @media ${device.laptop} {
      font-size: ${({ theme }) => theme.fontSize.xl4};
      margin: 80px 0 24px 0;
    }

    @media ${device.tablet} {
      font-size: ${({ theme }) => theme.fontSize.xl3};
      margin: 32px 0 16px 0;
    }

    @media ${device.mobileL} {
      font-size: ${({ theme }) => theme.fontSize.xl2};
      margin: 24px 0 16px 0;
    }
  }
`

export default About
