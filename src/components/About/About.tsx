import { Element } from "react-scroll"
import { menuAnchors } from "../Navbar/common.ts"
import styled from "styled-components"
import { device } from "../../theme.ts"

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
          <div>stuff</div>
        </TilesWrapper>
      </Wrapper>
    </StyledElement>
  )
}

const StyledElement = styled(Element)`
  padding-bottom: 32px;
  text-align: center;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xl3};
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
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
  max-width: 600px;
`

export default About
