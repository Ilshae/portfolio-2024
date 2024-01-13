import { Element } from "react-scroll"
import styled from "styled-components"
import { device } from "../../../theme.ts"
import { menuAnchors } from "../../Navbar/common.ts"
import Tile from "./Tile.tsx"

const Work = () => {
  return (
    <StyledElement name={menuAnchors.work}>
      <h1>Work</h1>
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
          href="https://ilshae.github.io/crwn-clothing/"
          hrefGithub="https://github.com/Ilshae/crwn-clothing-src"
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

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-column-gap: 15px;
  column-gap: 15px;
  grid-row-gap: 15px;
  row-gap: 15px;
  max-width: 900px;
  margin: 0 auto;
`

export default Work
