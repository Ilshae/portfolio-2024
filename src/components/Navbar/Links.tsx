import { Link as RSLink } from "react-scroll"
import styled from "styled-components"
import { defLinkProps, menuAnchors } from "./common.ts"
import { Dispatch, FC } from "react"
import { device } from "../../theme.ts"

const Links: FC<{ isOpen: boolean; setIsOpen: Dispatch<boolean> }> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <Wrapper $isOpen={isOpen}>
      <Nav $isOpen={isOpen}>
        <Link
          to={menuAnchors.home}
          activeClass="active"
          onClick={() => setIsOpen(false)}
          {...defLinkProps}
        >
          Home
        </Link>
        <Link
          to={menuAnchors.about}
          activeClass="active"
          onClick={() => setIsOpen(false)}
          {...defLinkProps}
        >
          About
        </Link>
        <Link
          to={menuAnchors.work}
          activeClass="active"
          onClick={() => setIsOpen(false)}
          {...defLinkProps}
        >
          Work
        </Link>
        <Link
          to={menuAnchors.contact}
          activeClass="active"
          onClick={() => setIsOpen(false)}
          {...defLinkProps}
        >
          Contact
        </Link>
      </Nav>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ $isOpen: boolean }>`
  transition: opacity 0.3s;

  @media ${device.tablet} {
    opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  }
`

const Nav = styled.nav<{ $isOpen: boolean }>`
  @media ${device.tablet} {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    height: ${({ $isOpen }) => ($isOpen ? "100vh" : "auto")};
    width: ${({ $isOpen }) => ($isOpen ? "100%" : "auto")};
    position: ${({ $isOpen }) => ($isOpen ? "fixed" : "static")};
    top: ${({ $isOpen }) => ($isOpen ? "59px" : "0")};
    left: 0;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.color.black};
  }
`

const Link = styled(RSLink)`
  margin-right: 32px;
  font-size: ${({ theme }) => theme.fontSize.xl2};
  font-weight: 700;
  position: relative;
  padding-bottom: 6px;

  &::after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: ${({ theme }) => theme.color.pink};
    transition:
      width 0.3s ease 0s,
      left 0.3s ease 0s;
    width: 0;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }

  &.active::after {
    width: 100% !important;
    left: 0 !important;
    height: 3.5px !important;
  }

  &:last-of-type {
    margin-right: 0;
  }

  @media ${device.desktop} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media ${device.tablet} {
    margin: 24px 0;
    font-size: ${({ theme }) => theme.fontSize.xl2};
    width: min-content;
    padding-bottom: 0;
    height: 50px;
  }
`

export default Links
