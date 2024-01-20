import Tile from "./Tile.tsx"
import { tiles } from "./tiles.ts"
import styled from "styled-components"
import { device } from "../../../theme.ts"

const Skills = () => {
  return (
    <Wrapper>
      <TilesWrapper>
        <h2>About me</h2>
        <h3>My skills</h3>
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
`

const TilesWrapper = styled.div`
  width: 600px;
  padding-left: 64px;

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl3};
    margin: 96px 0 32px 0;

    @media ${device.laptop} {
      margin: 80px 0 24px 0;
      font-size: ${({ theme }) => theme.fontSize.xl2};
    }

    @media ${device.tablet} {
      font-size: ${({ theme }) => theme.fontSize.xl};
      margin: 64px 0 16px 0;
    }

    @media ${device.mobileL} {
      font-size: ${({ theme }) => theme.fontSize.l};
      margin: 48px 0 16px 0;
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl2};
    margin: 0;
    padding: 0 0 16px 0;

    @media ${device.laptopL} {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }

    @media ${device.laptop} {
      font-size: ${({ theme }) => theme.fontSize.l};
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
