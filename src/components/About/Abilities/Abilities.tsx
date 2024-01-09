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
