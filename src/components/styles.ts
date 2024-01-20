import styled from "styled-components"
import { device } from "../theme.ts"

export const CommonContainer = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;

  @media ${device.desktop} {
    margin: ${({ theme }) => theme.container.margin.desktop};
  }
  @media ${device.laptopL} {
    margin: ${({ theme }) => theme.container.margin.laptopL};
  }
  @media ${device.laptop} {
    margin: ${({ theme }) => theme.container.margin.laptop};
  }
  @media ${device.tablet} {
    margin: ${({ theme }) => theme.container.margin.tablet};
  }
  @media ${device.mobileM} {
    margin: ${({ theme }) => theme.container.margin.mobileM};
  }
`

export const H2Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl5};
  margin: 96px 0 32px 0;

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fontSize.xl4};
    margin: 80px 0 24px 0;
  }

  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.xl3};
    margin: 32px 0 16px 0;
  }

  @media ${device.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.xl2};
    margin: 24px 0 16px 0;
  }
`

export const H3Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl2};
  margin: 0;
  padding: 0 0 16px 0;

  @media ${device.laptopL} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`
