import { Link as RSLink } from "react-scroll"
import { defLinkProps, menuAnchors } from "./common.ts"
import styled from "styled-components"
import { Dispatch, FC } from "react"

const Logo: FC<{ isOpen: boolean; setIsOpen: Dispatch<boolean> }> = ({
  isOpen,
  setIsOpen,
}) => {
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
  height: 60px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.reallyBigTitle};
`

const StyledDiv = styled.div`
  font-weight: 600;
  font-size: ${({ theme }) => `calc(${theme.fontSize.reallyBigTitle} * 0.7)`};
  color: ${({ theme }) => theme.color.pink};
  margin-left: 2px;
  display: inline-block;
`

export default Logo
