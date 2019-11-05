import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const LinkButton = ({ url, text, modifier }) => (
  <Link
    to={url}
    className={`button link-button ${
      modifier ? `link-button--${modifier}` : ""
    }`}
  >
    {text}
  </Link>
)

export default LinkButton

LinkButton.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  modifier: PropTypes.string,
}

LinkButton.defaultProps = {
  modifier: "",
}
