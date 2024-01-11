import { FC, ReactNode } from "react"
import styled from "styled-components"

const Row: FC<{
  title: string
  imgUrl: string
  vidUrl?: string
  textOnRight?: boolean
  children: ReactNode
}> = ({ title, imgUrl, vidUrl, textOnRight = false, children }) => {
  return (
    <Wrapper>
      {textOnRight ? (
        <>
          <Graphic imgUrl={imgUrl} vidUrl={vidUrl} title={title} />
          <Text title={title}>{children}</Text>
        </>
      ) : (
        <>
          {" "}
          <Text title={title}>{children}</Text>
          <Graphic imgUrl={imgUrl} vidUrl={vidUrl} title={title} />
        </>
      )}
    </Wrapper>
  )
}

const Text: FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <TextWrapper>
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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 64px 0;
`

const TextWrapper = styled.div`
  max-width: 600px;
  text-align: left;

  h3 {
    border-left: 5px solid ${({ theme }) => theme.color.pink};
    margin-bottom: 32px;
    padding-left: 16px;
    text-align: left;
    font-size: ${({ theme }) => theme.fontSize.xl2};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.color.grey};
  }
`

const GraphicWrapper = styled.div`
  img,
  video {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    max-height: 310px;
  }
`

export default Row
