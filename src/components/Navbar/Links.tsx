import { Link as RSLink } from "react-scroll"
import styled from "styled-components"
import { linkAnchors } from "./linkAnchors.ts"

const defLinkProps = {
  spy: true,
  offset: -170,
  smooth: true,
  duration: 300,
}

const Links = () => {
  return (
    <div>
      <Link to={linkAnchors.home} {...defLinkProps}>
        Home
      </Link>
      <Link to={linkAnchors.about} {...defLinkProps}>
        About
      </Link>
      <Link to={linkAnchors.work} {...defLinkProps}>
        Work
      </Link>
      <Link to={linkAnchors.contact} {...defLinkProps}>
        Contact
      </Link>
    </div>
  )
}

const Link = styled(RSLink)``

export default Links
