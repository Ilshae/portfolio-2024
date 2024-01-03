import { Dispatch, FC } from "react"
import styled from "styled-components"
import { device } from "../../theme.ts"

const HamburgerButton: FC<{
  isOpen: boolean
  setIsOpen: Dispatch<boolean>
}> = ({ isOpen, setIsOpen }) => {
  return (
    <Wrapper>
      <Hamburger
        id="hamburger"
        $isOpen={isOpen}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </Hamburger>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`

const Hamburger = styled.div<{ $isOpen: boolean }>`
  width: 40px;
  height: 32px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  display: none;

  @media ${device.tablet} {
    display: block;
  }

  span {
    display: block;
    position: absolute;
    height: 5px;
    width: 50%;
    background: ${({ theme }) => theme.color.pink};
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  span:nth-child(even) {
    left: 50%;
    border-radius: 0 5px 5px 0;
  }

  span:nth-child(odd) {
    left: 0;
    border-radius: 5px 0 0 5px;
  }

  span:nth-child(1) {
    top: ${({ $isOpen }) => ($isOpen ? "9px" : "0")};
    left: ${({ $isOpen }) => ($isOpen ? "5px" : "0")};
    -webkit-transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(45deg)" : "rotate(0deg)"};
    -moz-transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(45deg)" : "rotate(0deg)"};
    -o-transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(45deg)" : "rotate(0deg)"};
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg)" : "rotate(0deg)")};
  }

  span:nth-child(2) {
    top: ${({ $isOpen }) => ($isOpen ? "9px" : "0")};
    left: ${({ $isOpen }) => ($isOpen ? "calc(50% - 5px)" : "50%")};
    -webkit-transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(-45deg)" : "none"};
    -moz-transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg)" : "none")};
    -o-transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg)" : "none")};
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg)" : "none")};
  }

  span:nth-child(3) {
    top: 12px;
    left: ${({ $isOpen }) => ($isOpen ? "-50%" : "0")};
    opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
  }

  span:nth-child(4) {
    top: 12px;
    left: ${({ $isOpen }) => ($isOpen ? "100%" : "50%")};
    opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
  }

  span:nth-child(5) {
    top: ${({ $isOpen }) => ($isOpen ? "20px" : "24px")};
    left: ${({ $isOpen }) => ($isOpen ? "5px" : "0")};
    -webkit-transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(-45deg)" : "none"};
    -moz-transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg)" : "none")};
    -o-transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg)" : "none")};
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg)" : "none")};
  }

  span:nth-child(6) {
    top: ${({ $isOpen }) => ($isOpen ? "20px" : "24px")};
    left: ${({ $isOpen }) => ($isOpen ? "calc(50% - 5px)" : "50%")};
    -webkit-transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg)" : "none")};
    -moz-transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg)" : "none")};
    -o-transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg)" : "none")};
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg)" : "none")};
  }
`

export default HamburgerButton
