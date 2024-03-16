import { Element } from "react-scroll"
import styled from "styled-components"
import { device } from "../../theme.ts"
import { menuAnchors } from "../Navbar/common.ts"
import Tile from "./Tile.tsx"
import { H2Title } from "../styles.ts"

const Work = () => {
  return (
    <StyledElement name={menuAnchors.work}>
      <H2Title>Work</H2Title>
      <Wrapper>
        <Tile
          src="assets/images/apps/jachty-pruszynski.jpg"
          title="Jachty Pruszynski"
          href="https://jachtypruszynski.pl/"
          stack={[
            "html",
            "css",
            "sass",
            "javascript",
            "react",
            "redux",
            "github",
            "webpack",
            "react-router",
            "photoshop",
            "jest",
          ]}
        >
          A commercial project for a chartering company with detailed
          descriptions of their products.
        </Tile>
        <Tile
          src="assets/images/apps/crwn-clothing.jpg"
          title="Crwn Clothing"
          href="https://crwn-clothing-2024.netlify.app/"
          hrefGithub="https://github.com/Ilshae/crwn-clothing-src-2024"
          stack={[
            "html",
            "css",
            "sass",
            "javascript",
            "react",
            "redux",
            "github",
            "react-router",
            "firebase",
            "styled-components",
            "jest",
          ]}
        >
          Try out signing in with google or creating a new account and paying
          with test credit card.
        </Tile>
        <Tile
          src="assets/images/apps/hermes-travel-agency.jpg"
          title="Hermes Travel Agency"
          href="https://hermes-travel-agency-app.herokuapp.com/"
          hrefGithub="https://github.com/Ilshae/react-travel-agency"
          stack={[
            "html",
            "css",
            "sass",
            "javascript",
            "react",
            "redux",
            "github",
            "webpack",
            "react-router",
            "jest",
          ]}
        >
          Dynamically sort trips by tags and duration or use a search bar.
          Ordered trips go to a JSON Server for later use.
        </Tile>
        <Tile
          src="assets/images/apps/vivek-university.jpg"
          title="Vivek University"
          href="https://pruszynska.pl/"
          hrefGithub="https://github.com/Ilshae/vivek-university"
          stack={[
            "html",
            "css",
            "sass",
            "javascript",
            "wordpress",
            "advanced-custom-fields",
            "github",
            "webpack",
          ]}
        >
          Wordpress site with a custom made theme. Register a new user and
          login. Logged in users have access to Notes subpage.
        </Tile>
        <Tile
          src="assets/images/apps/mamma-mia-pizeria.jpg"
          title="Mamma Mia Pizzeria"
          href="https://mamma-mia-italian-pizza.herokuapp.com/"
          hrefGithub="https://github.com/Ilshae/project-pizzeria"
          stack={[
            "html",
            "css",
            "sass",
            "javascript",
            "react",
            "redux",
            "github",
            "webpack",
            "react-router",
          ]}
        >
          Pure Javascript app. Ordered products from cart go to a JSON Server.
          Live table booking.
        </Tile>
        <Tile
          src="assets/images/apps/tetris.jpg"
          title="Tetris"
          href="https://ilshae.github.io/tetris/"
          hrefGithub="https://github.com/Ilshae/react-tetris"
          stack={["html", "css", "sass", "javascript", "react", "github"]}
        >
          Press start and use arrows to play.
        </Tile>
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
