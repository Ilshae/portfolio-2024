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
    <Nav>
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
  )
}

const Nav = styled.nav`
  @media ${device.tablet} {
    display: none;
  }
`

const Link = styled(RSLink)`
  margin-right: 32px;
  font-size: 1.25rem;
  font-weight: 700;
  position: relative;
  padding-bottom: 6px;
  text-transform: uppercase;

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
`

export default Links
