import { Dispatch, FC } from "react"
import styled from "styled-components"
import { device } from "../../theme.ts"
import { navbarHeight } from "./common.ts"

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
  height: ${navbarHeight.tablet};
  display: none;
  align-items: center;

  @media ${device.tablet} {
    display: flex;
  }
`

const Hamburger = styled.div<{ $isOpen: boolean }>`
  width: 40px;
  height: 24px;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  display: block;

  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 50%;
    background: ${({ theme }) => theme.color.pink};
    opacity: 1;
    transform: rotate(0deg);
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
    top: ${({ $isOpen }) => ($isOpen ? "5px" : "0")};
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
    top: ${({ $isOpen }) => ($isOpen ? "5px" : "0")};
    left: ${({ $isOpen }) => ($isOpen ? "calc(50% - 5px)" : "50%")};
    -webkit-transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(-45deg)" : "none"};
    -moz-transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg)" : "none")};
    -o-transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg)" : "none")};
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg)" : "none")};
  }

  span:nth-child(3) {
    top: 10px;
    left: ${({ $isOpen }) => ($isOpen ? "-50%" : "0")};
    opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
  }

  span:nth-child(4) {
    top: 10px;
    left: ${({ $isOpen }) => ($isOpen ? "100%" : "50%")};
    opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
  }

  span:nth-child(5) {
    top: ${({ $isOpen }) => ($isOpen ? "16px" : "20px")};
    left: ${({ $isOpen }) => ($isOpen ? "5px" : "0")};
    -webkit-transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(-45deg)" : "none"};
    -moz-transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg)" : "none")};
    -o-transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg)" : "none")};
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg)" : "none")};
  }

  span:nth-child(6) {
    top: ${({ $isOpen }) => ($isOpen ? "16px" : "20px")};
    left: ${({ $isOpen }) => ($isOpen ? "calc(50% - 5px)" : "50%")};
    -webkit-transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg)" : "none")};
    -moz-transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg)" : "none")};
    -o-transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg)" : "none")};
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg)" : "none")};
  }
`

export default HamburgerButton
