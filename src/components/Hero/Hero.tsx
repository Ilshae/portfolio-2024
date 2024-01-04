import { Element } from "react-scroll"
import { menuAnchors } from "../Navbar/common.ts"
import styled, { keyframes } from "styled-components"

const Hero = () => {
  return (
    <StyledElement name={menuAnchors.home}>
      <TextWrapper>
        <h1>
          I learn <br /> everyday.
          <span />
        </h1>
        <p>Hello, I'm a Software Engineer.</p>
      </TextWrapper>
      <ImgWrapper>
        <img src={"/assets/images/hero.jpg"} alt={"hero"} />
      </ImgWrapper>
    </StyledElement>
  )
}

const StyledElement = styled(Element)`
  display: flex;
`

const inOut = keyframes`
  0% {opacity: 0;}
  50% {opacity: 1;}
  100% {opacity: 0;}
`

const TextWrapper = styled.div`
  h1 {
    font-size: 88px;
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: 3px;
    margin-bottom: 32px;
    white-space: nowrap;

    span {
      margin-left: 10px;
      background-color: ${({ theme }) => theme.color.pink};
      display: inline-block;
      width: 70px;
      height: 7px;
      opacity: 0;
      animation-name: ${inOut};
      animation-duration: 1.75s;
      animation-delay: 1s;
      animation-iteration-count: infinite;
    }
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.color.grey};
  }
`

const ImgWrapper = styled.div`
  margin-left: auto;

  img {
    width: 100%;
    max-width: 700px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`
export default Hero
