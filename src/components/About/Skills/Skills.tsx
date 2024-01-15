import Tile from "./Tile.tsx"
import { tiles } from "./tiles.ts"
import styled from "styled-components"
import { device } from "../../../theme.ts"

const Skills = () => {
  return (
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
  )
}

const Wrapper = styled.section`
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

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl3};
    margin: 0 0 24px 0;

    @media ${device.laptop} {
      margin: 0 0 16px 0;
      font-size: ${({ theme }) => theme.fontSize.xl2};
    }

    @media ${device.tablet} {
      font-size: ${({ theme }) => theme.fontSize.xl};
      margin: 0 0 24px 0;
    }

    @media ${device.mobileL} {
      font-size: ${({ theme }) => theme.fontSize.l};
      margin: 0 0 16px 0;
    }
  }

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
    column-gap: 10px;
    row-gap: 10px;
    white-space: nowrap;

    @media ${device.laptopL} {
      grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
      column-gap: 5px;
      row-gap: 5px;
    }

    @media ${device.tablet} {
      grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
      column-gap: 5px;
      row-gap: 5px;
    }
  }
`

export default Skills
