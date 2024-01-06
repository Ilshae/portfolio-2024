import { Element } from "react-scroll"
import { menuAnchors } from "../Navbar/common.ts"
import styled from "styled-components"
import { device } from "../../theme.ts"
import Tile from "./Tile.tsx"
import { tiles } from "./tiles.ts"

const About = () => {
  return (
    <StyledElement name={menuAnchors.about}>
      <h1>About</h1>
      <h2>Skills</h2>
      <Wrapper>
        <ImgWrapper>
          <img src={"/assets/images/officeStyle/design.jpg"} alt={"hero"} />
        </ImgWrapper>
        <TilesWrapper>
          <div>
            {tiles.map((t) => (
              <Tile href={t.href} title={t.title} imageUrl={t.imageUrl} />
            ))}
          </div>
        </TilesWrapper>
      </Wrapper>
    </StyledElement>
  )
}

const StyledElement = styled(Element)`
  padding-bottom: 32px;
  text-align: center;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xl3};
  }

  h2 {
    padding-bottom: 24px;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const ImgWrapper = styled.div`
  img {
    width: 100%;
    max-width: 600px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    @media ${device.tablet} {
      margin-top: 24px;
      max-height: 250px;
    }
  }
`

const TilesWrapper = styled.div`
  width: 600px;
  padding-left: 64px;

  div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(85px, 1fr));
    grid-column-gap: 10px;
    -moz-column-gap: 10px;
    column-gap: 10px;
    grid-row-gap: 10px;
    row-gap: 10px;
    white-space: nowrap;
  }
`

export default About
