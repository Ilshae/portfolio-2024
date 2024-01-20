import styled from "styled-components"
import Row from "./Row.tsx"
import { device } from "../../../theme.ts"

const Abilities = () => {
  return (
    <Wrapper>
      <h2>What I can do</h2>
      <Row title={"UI & UX"} imgUrl={"/assets/images/officeStyle/design.jpg"}>
        I collaborated with cross-functional teams, working closely with UX/UI
        designers and back-end developers. I enforced coding standards,
        enhancing codebase cleanliness and maintainability.
      </Row>

      <Row
        title={"Software Development"}
        imgUrl={"/assets/images/apps/jenkins.jpg"}
        textOnRight={true}
      >
        I actively contributed to development using Gerrit for code review and
        version control and participated in Agile cycles with a focus on
        adaptability. I have experience with Jenkins pipelines for continuous
        integration and deployment.
      </Row>

      <Row
        title={"Personal Projects"}
        imgUrl={"/assets/images/apps/jachty-pruszynski.jpg"}
        vidUrl={"/assets/images/apps/jachty-pruszynski.mp4"}
      >
        I can build a website using React, Wordpress or pure Javascript. Having
        a well-developed website provides great opportunities for your business.
        This is a website for{" "}
        <Link
          href="https://jachtypruszynski.pl/"
          target="_blank"
          rel={"noopener noreferrer"}
        >
          Jachty Pruszyński
        </Link>{" "}
        which I made.
      </Row>

      <Row
        title={"Design & Graphic"}
        imgUrl={"/assets/images/apps/desktop-mobile.jpg"}
        textOnRight={true}
      >
        I can create graphical designs through Photoshop tailored for optimal
        responsiveness on various devices. Here is{" "}
        <Link
          href="https://ilshae.github.io/crwn-clothing/"
          target="_blank"
          rel={"noopener noreferrer"}
        >
          Crwn Clothing
        </Link>
        . A shop page integrated with Stripe payments.
      </Row>

      <Row
        title={"Hosting Support & SEO"}
        imgUrl={"/assets/images/apps/seo.jpg"}
      >
        I can optimise the page structure and code of your website. Use tools
        such as Google Analytics or Speed Insights to boost search results,
        ensuring your online presence.
      </Row>

      <Row
        title={"Intercultural Skills"}
        imgUrl={"/assets/images/officeStyle/walk.jpg"}
        textOnRight={true}
      >
        I'm fluent in English, enabling seamless communication in multicultural
        and multilingual environments. This fosters collaboration, allowing me
        to effectively navigate documentation and work harmoniously with team
        members of different linguistic backgrounds.
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.section`
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
`

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.pink};
`

export default Abilities
