import { FC, ReactNode } from "react"
import styled from "styled-components"

const Tile: FC<{
  src: string
  title: string
  href: string
  hrefGithub?: string
  stack: string[]
  children: ReactNode
}> = ({ src, title, href, hrefGithub, stack, children }) => {
  return (
    <Wrapper>
      <ImgWrapper>
        <a href={href}>
          <img src={src} alt={title} />
        </a>
      </ImgWrapper>
      <Text>
        <Description>
          <h3>
            <Link href={href}>{title}</Link>
          </h3>
          <p>{children}</p>
        </Description>
        <Footer>
          <Stack>
            {stack.map((item) => (
              <img
                key={item}
                src={`assets/images/skills/${item}.png`}
                alt={item}
              />
            ))}
          </Stack>
          {hrefGithub ? (
            <GithubLink>
              <Link href={hrefGithub}>CHECK CODE</Link>
            </GithubLink>
          ) : null}
        </Footer>
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  border-radius: 10px;
  margin: 16px;
  box-shadow: 0 3px 20px rgb(0 0 0 / 20%);
  transition: transform 0.2s ease;
  z-index: 2;
  max-width: 400px;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 4px 20px 3px rgb(0 0 0 / 20%);
    z-index: 2;
  }
`

const ImgWrapper = styled.div`
  img {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 16px 16px 16px;
  line-height: 1;
`

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.pink};
  white-space: nowrap;
  font-weight: bold;
`

const Description = styled.div`
  text-align: left;

  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin: 0;
    padding: 0 0 16px 0;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.color.grey};
    margin: 0;
    padding: 0 0 32px 0;
  }
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 16px 0;
`

const Stack = styled.div`
  img {
    width: 30px;
    height: 30px;
  }
`

const GithubLink = styled.div``

export default Tile
