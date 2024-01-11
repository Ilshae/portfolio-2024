import styled from "styled-components"
import Row from "./Row.tsx"

const Abilities = () => {
  return (
    <Wrapper>
      <h2>What I can do</h2>
      <Row
        title={"Website"}
        imgUrl={"/assets/images/apps/jachty-pruszynski.jpg"}
        vidUrl={"/assets/images/apps/jachty-pruszynski.mp4"}
      >
        I can build your website in Wordpress, React or just Javascript. Having
        a website provides great opportunities for your business. This is a
        website for{" "}
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
        I can create designs that look awesome on any device and prepare
        promotional graphic and image materials. This is{" "}
        <Link
          href="https://ilshae.github.io/crwn-clothing/"
          target="_blank"
          rel={"noopener noreferrer"}
        >
          Crwn Clothing
        </Link>
        . It's a shop page with stripe payments.
      </Row>

      <Row
        title={"Hosting Support & SEO"}
        imgUrl={"/assets/images/apps/seo.jpg"}
      >
        I can take care of your website. Optimise page structure and code, use
        tools like Google Analytics or Speed Insights to increase search
        results.
      </Row>

      <Row
        title={"E-Commerce & English"}
        imgUrl={"/assets/images/apps/e-commerce.jpg"}
        textOnRight={true}
      >
        I have experience in designing marketing content for various platforms
        like Allegro and Facebook. I speak fluent English and know technical
        vocabulary allowing me to fully understand documentations.
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl3};
    margin: 48px 0;
  }
`

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.pink};
`

export default Abilities
