import { Element } from "react-scroll"
import { menuAnchors } from "../Navbar/common.ts"
import styled from "styled-components"
import { H2Title } from "../styles.ts"
import { device } from "../../theme.ts"

const Contact = () => {
  return (
    <StyledElement name={menuAnchors.contact}>
      <H2Title>Contact</H2Title>
      <p>
        <Link href={'mailto:"pruszynskaingrid@outlook.com"'}>
          pruszynskaingrid@outlook.com
        </Link>
      </p>
    </StyledElement>
  )
}

const StyledElement = styled(Element)`
  padding-bottom: 32px;
  text-align: center;
`

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.pink};
  white-space: nowrap;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.l};

  @media ${device.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`

export default Contact
