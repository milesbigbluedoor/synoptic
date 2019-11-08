import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import LogoSVG from "../images/jd_logo.svg"
import LogoSVGWhite from "../images/jd_logo--white.svg"

const Logo = ({ modifier }) => {
  let logoSrc

  if (modifier === "white") {
    logoSrc = LogoSVGWhite
  } else {
    logoSrc = LogoSVG
  }

  return (
    <Link to="/" className="branding" aria-label="John Doe Photography Logo">
      <div
        className="branding__logo"
        style={{
          backgroundImage: `url(${logoSrc})`,
        }}
      />
    </Link>
  )
}

export default Logo

Logo.propTypes = {
  modifier: PropTypes.string,
}

Logo.defaultProps = {
  modifier: "black",
}
