import { FC } from "react"
import styled from "styled-components"

const Tile: FC<{
  title: string
  href: string
  imageUrl: string
  outsideLink?: boolean
}> = ({ title, href, imageUrl, outsideLink = true }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel={outsideLink ? "noopener noreferrer" : "noreferrer"}
    >
      <div>{title}</div>
      <div>
        <img src={imageUrl} alt={title} />
      </div>
    </Link>
  )
}

const Link = styled.a`
  padding: 8px;
  border-radius: 5px;
  transition: all 0.3s;
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.m};
`

export default Tile
