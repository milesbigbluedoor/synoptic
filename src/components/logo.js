import React from "react"
import { Link } from "gatsby"

import LogoSVG from "../images/jd_logo.svg"

const Logo = () => {
  return (
    <Link to="/" className="branding">
      <div
        className="branding__logo"
        style={{
          backgroundImage: `url(${LogoSVG})`,
        }}
      />
    </Link>
  )
}

export default Logo
