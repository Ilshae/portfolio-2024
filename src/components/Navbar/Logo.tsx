import { Link as RSLink } from "react-scroll"
import { linkAnchors } from "./linkAnchors.ts"
import styled from "styled-components"

const Logo = () => {
  return (
    <Link
      to={linkAnchors.home}
      spy={true}
      offset={-150}
      smooth={true}
      duration={300}
    >
      Ingrid<StyledDiv>Pruszyńska</StyledDiv>
    </Link>
  )
}

const Link = styled(RSLink)`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.reallyBigTitle};
`

const StyledDiv = styled.div`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.bigTitle};
  color: ${({ theme }) => theme.color.pink};
  margin-left: 2px;
  display: inline-block;
`

export default Logo
