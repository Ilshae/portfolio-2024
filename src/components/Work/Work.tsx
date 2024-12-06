import { Element } from "react-scroll"
import { device } from "../../theme.ts"
import { menuAnchors } from "../Navbar/common.ts"
import Tile from "./Tile.tsx"
import { H2Title, H3Title } from "../styles.ts"
import styled from "styled-components"
import { projects } from "../../data/projects.ts"

const Work = () => {
  const { hosted, notHosted } = projects

  return (
    <StyledElement name={menuAnchors.work}>
      <H2Title>Work</H2Title>
      <H3Title>Hosted projects</H3Title>
      <Wrapper>
        {hosted.map(
          ({ image, title, description, href, hrefGithub, stack }) => (
            <Tile
              title={title}
              href={href}
              hrefGithub={hrefGithub}
              stack={stack}
              src={image}
            >
              {description}
            </Tile>
          )
        )}
      </Wrapper>
      <H3Title>Other projects</H3Title>
      <Wrapper>
        {notHosted.map(({ image, title, description, hrefGithub, stack }) => (
          <Tile title={title} hrefGithub={hrefGithub} stack={stack} src={image}>
            {description}
          </Tile>
        ))}
      </Wrapper>
    </StyledElement>
  )
}

const StyledElement = styled(Element)`
  padding-bottom: 32px;
  text-align: center;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 15px;
  row-gap: 15px;
  margin-bottom: 30px;

  @media ${device.desktop} {
    grid-template-columns: 1fr 1fr;
    column-gap: 5px;
    row-gap: 5px;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    row-gap: 32px;
  }
`

export default Work
