import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Banner = ({ image }) => (
  <div className="banner">
    <Img fluid={image} style={{ maxHeight: "500px" }} />
  </div>
)

export default Banner

Banner.propTypes = {
  image: PropTypes.shape.isRequired,
}
