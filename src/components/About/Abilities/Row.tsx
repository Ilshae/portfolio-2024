import { FC, ReactNode } from "react"
import styled from "styled-components"
import { device } from "../../../theme.ts"

const Row: FC<{
  title: string
  imgUrl: string
  vidUrl?: string
  textOnRight?: boolean
  children: ReactNode
}> = ({ title, imgUrl, vidUrl, textOnRight = false, children }) => {
  return (
    <Wrapper $textOnRight={textOnRight}>
      {textOnRight ? (
        <>
          <Graphic imgUrl={imgUrl} vidUrl={vidUrl} title={title} />
          <Text title={title} textOnRight={textOnRight}>
            {children}
          </Text>
        </>
      ) : (
        <>
          <Text title={title} textOnRight={textOnRight}>
            {children}
          </Text>
          <Graphic imgUrl={imgUrl} vidUrl={vidUrl} title={title} />
        </>
      )}
    </Wrapper>
  )
}

const Text: FC<{
  title: string
  textOnRight: boolean
  children: ReactNode
}> = ({ title, textOnRight, children }) => {
  return (
    <TextWrapper $textOnRight={textOnRight}>
      <h3>{title}</h3>
      <p>{children}</p>
    </TextWrapper>
  )
}

const Graphic: FC<{ imgUrl: string; title: string; vidUrl?: string }> = ({
  imgUrl,
  title,
  vidUrl,
}) => {
  return (
    <GraphicWrapper>
      {vidUrl ? (
        <video autoPlay muted loop>
          <source src={vidUrl} type="video/mp4" />
          <img src={imgUrl} alt={title} />
        </video>
      ) : (
        <img src={imgUrl} alt={title} />
      )}
    </GraphicWrapper>
  )
}

const Wrapper = styled.div<{ $textOnRight: boolean }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 0 64px 0;

  @media ${device.tablet} {
    flex-direction: ${({ $textOnRight }) =>
      $textOnRight ? "column-reverse" : "column"};
  }
`

const TextWrapper = styled.div<{ $textOnRight: boolean }>`
  max-width: 600px;
  text-align: left;
  padding: ${({ $textOnRight }) =>
    $textOnRight ? "0 0 0 32px" : "0 32px 0 0"};

  @media ${device.tablet} {
    padding: 0;
  }

  h3 {
    border-left: 5px solid ${({ theme }) => theme.color.pink};
    margin-bottom: 32px;
    padding-left: 16px;
    text-align: left;
    font-size: ${({ theme }) => theme.fontSize.xl2};

    @media ${device.laptopL} {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.color.grey};

    @media ${device.laptopL} {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
`

const GraphicWrapper = styled.div`
  img,
  video {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    max-width: 600px;

    @media ${device.laptopL} {
      max-width: 400px;
    }

    @media ${device.laptop} {
      max-width: 300px;
    }
  }
`

export default Row
