import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

const BlogCard = ({ image, date, title, body, url }) => (
  <Link to={url} className="blog-card">
    <div className="blog-card__image">
      <Img
        fluid={image}
        style={{ maxHeight: "300px", height: "300px", width: "300px" }}
      />
    </div>

    <div className="blog-card__text-wrapper">
      <p className="blog-card__date">{date}</p>
      <h3 className="blog-card__title">{title}</h3>
      <p
        className="blog-card__summary"
        dangerouslySetInnerHTML={{
          __html: `${body
            .split(" ")
            .splice(0, 25)
            .join(" ")} ...`,
        }}
      />
    </div>
  </Link>
)

export default BlogCard

BlogCard.propTypes = {
  image: PropTypes.shape.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
