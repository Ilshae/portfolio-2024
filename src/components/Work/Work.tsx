import { Element } from "react-scroll"
import { device } from "../../theme.ts"
import { menuAnchors } from "../Navbar/common.ts"
import Tile from "./Tile.tsx"
import { H2Title, H3Title } from "../styles.ts"
import styled from "styled-components"

const Work = () => {
  return (
    <StyledElement name={menuAnchors.work}>
      <H2Title>Work</H2Title>
      <H3Title>Hosted projects</H3Title>
      <Wrapper>
        <Tile
          src="assets/images/apps/jachty-pruszynski.jpg"
          title="Jachty Pruszynski"
          href="https://jachtypruszynski.pl/"
          hrefGithub="https://github.com/Ilshae/jachty-2"
          stack={[
            "HTML5",
            "CSS3",
            "Cypress",
            "TypeScript",
            "Material UI",
            "React",
            "React Router",
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
            "HTML5",
            "CSS3",
            "Cypress",
            "SASS",
            "JavaScript",
            "React",
            "Redux",
            "React Router",
            "Firebase",
            "Styled Components",
          ]}
        >
          Try out signing in with google or creating a new account and paying
          with test credit card.
        </Tile>
        <Tile
          src="assets/images/apps/tetris.jpg"
          title="Tetris"
          href="https://ilshae.github.io/tetris/"
          hrefGithub="https://github.com/Ilshae/react-tetris"
          stack={["HTML5", "CSS3", "SASS", "JavaScript", "React"]}
        >
          Press start and use arrows to play.
        </Tile>
      </Wrapper>
      <H3Title>Other projects</H3Title>
      <Wrapper>
        <Tile
          src="assets/images/apps/hermes-travel-agency.jpg"
          title="Hermes Travel Agency"
          href="https://github.com/Ilshae/react-travel-agency"
          hrefGithub="https://github.com/Ilshae/react-travel-agency"
          stack={[
            "HTML5",
            "CSS3",
            "SASS",
            "JavaScript",
            "React",
            "Redux",
            "Webpack",
            "React Router",
            "Jest",
          ]}
        >
          Dynamically sort trips by tags and duration or use a search bar.
          Ordered trips go to a JSON Server for later use.
        </Tile>
        <Tile
          src="assets/images/apps/vivek-university.jpg"
          title="Vivek University"
          href="https://github.com/Ilshae/vivek-university"
          hrefGithub="https://github.com/Ilshae/project-pizzeria"
          stack={[
            "HTML5",
            "CSS3",
            "SASS",
            "JavaScript",
            "Wordpress",
            "Advanced Custom Fields",
            "Webpack",
          ]}
        >
          Wordpress site with a custom made theme. Register a new user and
          login. Logged in users have access to Notes subpage.
        </Tile>
        <Tile
          src="assets/images/apps/fullstack.jpg"
          title="Fullstack application"
          href="https://github.com/Ilshae/fullstack-app"
          hrefGithub="https://github.com/Ilshae/fullstack-app"
          stack={[
            "HTML5",
            "CSS3",
            "JavaScript",
            "React",
            "React Intl",
            "React Router",
            "Cypress",
            "Styled Components",
            "Material UI",
            "TanStack Query",
            "Spring",
            "Spring Boot",
            "Spring Data JPA",
            "Lombok",
            "Spring Boot Validation",
            "Spring Boot Security",
            "Java JSON WebToken",
          ]}
        >
          Engineering Project made for my university. React on frontend and
          Spring on backend.
        </Tile>
        <Tile
          src="assets/images/apps/mamma-mia-pizeria.jpg"
          title="Mamma Mia Pizzeria"
          href="https://github.com/Ilshae/project-pizzeria"
          hrefGithub="https://github.com/Ilshae/project-pizzeria"
          stack={[
            "HTML5",
            "CSS3",
            "SASS",
            "JavaScript",
            "React",
            "Redux",
            "Webpack",
            "React Router",
          ]}
        >
          Pure JavaScript app. Ordered products from cart go to a JSON Server.
          Live table booking.
        </Tile>
        <Tile
          src="assets/images/apps/homes.jpg"
          title="Homes"
          href="https://github.com/Ilshae/homes-app"
          hrefGithub="https://github.com/Ilshae/homes-app"
          stack={["HTML5", "CSS3", "SASS", "TypeScript", "Angular"]}
        >
          Simple Angular application.
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
