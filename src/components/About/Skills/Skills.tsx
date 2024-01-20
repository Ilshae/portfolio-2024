import Tile from "./Tile.tsx"
import { tiles } from "./tiles.ts"
import styled from "styled-components"
import { device } from "../../../theme.ts"
import { H2Title, H3Title } from "../../styles.ts"

const Skills = () => {
  return (
    <Wrapper>
      <TilesWrapper>
        <H2Title>About me</H2Title>
        <H3Title>My skills</H3Title>
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
