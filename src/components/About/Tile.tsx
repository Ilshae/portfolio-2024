import { FC } from "react"
import styled from "styled-components"
import { device } from "../../theme.ts"

const Tile: FC<{
  title: string
  href: string
  imageUrl: string
  color: string
  outsideLink?: boolean
}> = ({ title, href, imageUrl, color, outsideLink = true }) => {
  return (
    <Link
      $color={color}
      href={href}
      target="_blank"
      rel={outsideLink ? "noopener noreferrer" : "noreferrer"}
    >
      <p>{title}</p>
      <img src={imageUrl} alt={title} />
    </Link>
  )
}

const Link = styled.a<{ $color: string }>`
  padding: 8px;
  border-radius: 5px;
  transition: all 0.3s;
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.m};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ $color }) => $color};
  }

  p {
    margin: 0;

    @media ${device.laptopL} {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }

  img {
    width: 70px;
    height: 70px;

    @media ${device.laptopL} {
      width: 50px;
      height: 50px;
    }
  }
`

export default Tile
