import React from "react"
import PropTypes from "prop-types"

import Img from "gatsby-image"

const PhotoCard = ({ image, title }) => (
  <article className="photo-card">
    <Img fluid={image} style={{ height: "100%" }} />
    <div className="photo-card__title">
      <h3>{title}</h3>
    </div>
  </article>
)

export default PhotoCard

PhotoCard.propTypes = {
  image: PropTypes.shape.isRequired,
  title: PropTypes.string.isRequired,
}
