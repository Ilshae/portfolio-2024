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
      <Wrapper>
        <ImgWrapper>
          <img src={"/assets/images/officeStyle/design.jpg"} alt={"hero"} />
        </ImgWrapper>
        <TilesWrapper>
          <h2>Skills</h2>
          <div>
            {tiles.map((t) => (
              <Tile
                key={t.title}
                href={t.href}
                title={t.title}
                imageUrl={t.imageUrl}
                color={t.color}
              />
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
    font-size: ${({ theme }) => theme.fontSize.xl4};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl3};
    margin: 0 0 24px 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: column-reverse;
  }
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

  @media ${device.laptopL} {
    padding-left: 32px;
    width: 100%;
    max-width: 600px;
  }

  @media ${device.tablet} {
    padding-left: 0;
  }

  div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(85px, 1fr));
    grid-column-gap: 10px;
    column-gap: 10px;
    grid-row-gap: 10px;
    row-gap: 10px;
    white-space: nowrap;

    @media ${device.laptopL} {
      grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
      grid-column-gap: 5px;
      column-gap: 5px;
      grid-row-gap: 5px;
      row-gap: 5px;
    }

    @media ${device.tablet} {
      grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
      grid-column-gap: 5px;
      column-gap: 5px;
      grid-row-gap: 5px;
      row-gap: 5px;
    }
  }
`

export default About
