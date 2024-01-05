import { Element } from "react-scroll"
import { menuAnchors } from "../Navbar/common.ts"
import styled, { keyframes } from "styled-components"
import { device } from "../../theme.ts"

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
        <img src={"/assets/images/officeStyle/hero.jpg"} alt={"hero"} />
      </ImgWrapper>
    </StyledElement>
  )
}

const StyledElement = styled(Element)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 32px;

  @media ${device.laptopL} {
    justify-content: space-between;
  }

  @media ${device.tablet} {
    flex-direction: column;
  }
`

const inOut = keyframes`
  0% {opacity: 0;}
  50% {opacity: 1;}
  100% {opacity: 0;}
`

const TextWrapper = styled.div`
  max-width: 600px;

  h1 {
    font-size: 88px;
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: 3px;
    margin-bottom: 32px;
    white-space: nowrap;

    @media ${device.laptopL} {
      font-size: 64px;
    }

    @media ${device.laptop} {
      font-size: 48px;
    }

    @media ${device.mobileL} {
      font-size: 40px;
    }

    @media ${device.mobileM} {
      font-size: 32px;
    }

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

      @media ${device.laptopL} {
        width: 60px;
      }

      @media ${device.laptop} {
        width: 50px;
      }

      @media ${device.mobileL} {
        width: 35px;
      }
    }
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.color.grey};

    @media ${device.laptopL} {
      font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media ${device.laptop} {
      font-size: ${({ theme }) => theme.fontSize.m};
    }

    @media ${device.tablet} {
      text-align: right;
    }
  }
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
export default Hero
