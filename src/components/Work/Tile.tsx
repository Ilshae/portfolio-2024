import { FC, ReactNode } from "react"
import styled from "styled-components"
import { device } from "../../theme.ts"
import { Tooltip } from "react-tooltip"

const Tile: FC<{
  title: string
  href: string
  hrefGithub?: string
  stack: string[]
  children: ReactNode
  src?: string
}> = ({ src, title, href, hrefGithub, stack, children }) => {
  return (
    <Wrapper>
      {src ? (
        <ImgWrapper>
          <a href={href} target={"_blank"}>
            <img src={src} alt={title} />
          </a>
        </ImgWrapper>
      ) : null}
      <Text>
        <Description>
          <h3>
            <Link href={href} target={"_blank"}>
              {title}
            </Link>
          </h3>
          <p>{children}</p>
        </Description>
        <Footer>
          <Stack>
            {stack.map((item) => (
              <a id={item.replace(" ", "-").replace(" ", "-")}>
                <img
                  key={item}
                  src={`assets/images/skills/${item}.png`}
                  alt={item}
                />
                <Tooltip
                  anchorSelect={`#${item.replace(" ", "-").replace(" ", "-")}`}
                >
                  {item}
                </Tooltip>
              </a>
            ))}
          </Stack>
          {hrefGithub ? (
            <GithubLink>
              <Link href={hrefGithub} target={"_blank"}>
                CHECK CODE
              </Link>
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
  position: relative;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 4px 20px 3px rgb(0 0 0 / 20%);
    z-index: 2;
  }

  @media ${device.tablet} {
    margin: 0;
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
  padding: 32px;
  line-height: 1;
  height: 200px;

  @media ${device.laptop} {
    padding: 16px;
  }

  @media ${device.tablet} {
    height: 160px;
  }

  @media ${device.mobileL} {
    height: 180px;
  }
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
    font-size: ${({ theme }) => theme.fontSize.xl2};
    margin: 0;
    padding: 0 0 16px 0;

    @media ${device.laptopL} {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }

    @media ${device.laptop} {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.color.grey};
    margin: 0;
    padding: 0 0 32px 0;

    @media ${device.laptopL} {
      font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media ${device.laptop} {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 0 0 16px 0;
  position: absolute;
  bottom: 16px;
  width: calc(100% - 60px);

  @media ${device.laptop} {
    flex-direction: column;
    width: calc(100% - 30px);
    padding: 0;
  }
`

const Stack = styled.div`
  text-align: left;

  @media ${device.laptop} {
    margin: 0 auto;
  }

  img {
    width: 32px;
    height: 32px;

    @media ${device.laptopL} {
      width: 26px;
      height: 26px;
    }

    @media ${device.mobileL} {
      width: 20px;
      height: 20px;
    }
  }
`

const GithubLink = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};

  @media ${device.laptopL} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media ${device.laptop} {
    margin: 0 auto;
    padding: 16px 0 0 0;
  }
`

export default Tile
