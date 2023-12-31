import { FC, ReactNode } from "react"
import styled from "styled-components"

const Row: FC<{
  title: string
  imgUrl: string
  vidUrl?: string
  children: ReactNode
}> = ({ title, imgUrl, vidUrl, children }) => {
  return (
    <Wrapper>
      <Text>
        <h3>{title}</h3>
        <p>{children}</p>
      </Text>
      <Graphic>
        {vidUrl ? (
          <Video autoPlay muted loop>
            <source src={vidUrl} type="video/mp4" />
            <img src={imgUrl} alt={title} />
          </Video>
        ) : (
          <img src={imgUrl} alt={title} />
        )}
      </Graphic>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Text = styled.div`
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

const Graphic = styled.div``

const Video = styled.video`
  max-height: 400px;
`

export default Row
