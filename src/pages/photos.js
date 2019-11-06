import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { navigate } from "@reach/router"
import Select from "react-select"
import "../scss/main.scss"

import PhotoCard from "../components/photo-card"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Photos = ({ data, location }) => {
  const [page, setPage] = useState(1)
  const [allPhotosLoaded, setAllPhotosLoaded] = useState(false)
  const photosPerPage = 8

  const renderPhotos = () => {
    const photos = data.allNodePhoto.edges
    const currentPhotos = photos.slice(0, page * photosPerPage)

    return currentPhotos.map(photo => (
      <PhotoCard
        key={photo.node.id}
        title={photo.node.title}
        image={
          photo.node.relationships.field_photograph.localFile.childImageSharp
            .fluid
        }
      />
    ))
  }

  const loadMore = () => {
    const photos = data.allNodePhoto.edges
    // check if all fetching more posts will result in all posts being displays
    const isAllPhotos = (page + 1) * photosPerPage >= photos.length
    setPage(prevState => prevState + 1)
    setAllPhotosLoaded(isAllPhotos)
  }

  const handleFilter = selectedOption => {
    navigate(selectedOption.value, { state: { selectedOption } })
  }

  const renderFilters = () => {
    const options = [
      {
        label: "All Photos",
        value: "/photos",
      },
      ...data.allTaxonomyTermSubjects.edges.map(edge => ({
        label: edge.node.name,
        value: `/photos/subject/${edge.node.name.toLowerCase()}`,
      })),
    ]

    return (
      <Select
        options={options}
        className="photo-filter"
        classNamePrefix="photo-filter"
        onChange={handleFilter}
        value={location.state.selectedOption}
        placeholder="Filter by subject"
      />
    )
  }

  useEffect(() => {
    if (data && photosPerPage >= data.allNodePhoto.edges.length) {
      setAllPhotosLoaded(true)
    }
  }, [data])

  return (
    <Layout>
      <SEO title="Photography Catalogue | John Doe Photography" />
      <div className="photos__header">
        <h1 className="photos__title">Photo Catalogue</h1>
        {renderFilters()}
      </div>

      <section className="photos__listing">{renderPhotos()}</section>
      {data.allNodePhoto.edges.length === 0 && (
        <h2 className="photos__no-results">
          There are no photos tagged with this subject{" "}
          <span role="img" aria-label="crying emoji">
            😢
          </span>
        </h2>
      )}
      {!allPhotosLoaded && (
        <button
          type="button"
          className="button blog__load-more"
          onClick={() => loadMore()}
        >
          Load more
        </button>
      )}
    </Layout>
  )
}

export default Photos

export const query = graphql`
  query($filter: node__photoFilterInput = {}) {
    allNodePhoto(filter: $filter, sort: { fields: created, order: DESC }) {
      edges {
        node {
          id
          title
          relationships {
            field_subject {
              name
            }
            field_photograph {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 800, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }

    allTaxonomyTermSubjects {
      edges {
        node {
          name
        }
      }
    }
  }
`

Photos.propTypes = {
  data: PropTypes.node.isRequired,
  location: PropTypes.shape.isRequired,
}
