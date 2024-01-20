import styled from "styled-components"

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; Ingrid Pruszyńska</p>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 64px;
`

export default Footer
