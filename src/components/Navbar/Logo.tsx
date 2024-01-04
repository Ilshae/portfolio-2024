import { Link as RSLink } from "react-scroll"
import { defLinkProps, menuAnchors, navbarHeight } from "./common.ts"
import styled from "styled-components"
import { Dispatch, FC } from "react"
import { device } from "../../theme.ts"

const Logo: FC<{ setIsOpen: Dispatch<boolean> }> = ({ setIsOpen }) => {
  return (
    <Link
      to={menuAnchors.home}
      onClick={() => setIsOpen(false)}
      {...defLinkProps}
    >
      Ingrid<StyledDiv>Pruszyńska</StyledDiv>
    </Link>
  )
}

const Link = styled(RSLink)`
  transition: all 0.3s;
  height: ${navbarHeight.desktopL};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.xl4};

  @media ${device.desktop} {
    height: ${navbarHeight.desktop};
    font-size: ${({ theme }) => theme.fontSize.xl3};
  }

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fontSize.xl2};
  }

  @media ${device.tablet} {
    height: ${navbarHeight.tablet};
    font-size: ${({ theme }) => theme.fontSize.xl2};
  }

  @media ${device.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`

const StyledDiv = styled.div`
  font-weight: 600;
  font-size: ${({ theme }) => `calc(${theme.fontSize.xl4} * 0.7)`};
  color: ${({ theme }) => theme.color.pink};
  margin-left: 2px;
  display: inline-block;

  @media ${device.desktop} {
    font-size: ${({ theme }) => `calc(${theme.fontSize.xl3} * 0.7)`};
  }

  @media ${device.laptop} {
    font-size: ${({ theme }) => `calc(${theme.fontSize.xl2} * 0.75)`};
  }

  @media ${device.mobileL} {
    font-size: ${({ theme }) => `calc(${theme.fontSize.xl} * 0.75)`};
  }
`

export default Logo
