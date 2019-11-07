import React, { useState } from "react"
import PropTypes from "prop-types"
import fetch from "unfetch"
import Modal from "react-modal"
import { graphql } from "gatsby"
import "../scss/main.scss"

import SuccessIcon from "../images/success-icon.svg"
import FailedIcon from "../images/failed-icon.svg"

import Banner from "../components/banner"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = ({ data }) => {
  const [inputValues, setInputValues] = useState({})
  const [sending, setSending] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [submissionSuccessful, setSubmissionSuccessful] = useState(null)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const handleSubmit = e => {
    e.preventDefault()

    // disable submit button while form is sending
    setSending(true)

    // create a POST request to the Drupal 8 backend to save the submission
    const postBody = {
      webform_id: "contact",
      name: inputValues.name,
      email: inputValues.email,
      message: inputValues.message,
    }

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    }

    fetch(
      "https://dev-photography-portfolio.pantheonsite.io/webform_rest/submit",
      {
        method: "POST",
        headers,
        body: JSON.stringify(postBody),
      }
    )
      .then(response => response.json())
      .then(r => {
        // reenable submit button when submission has finished
        setSending(false)

        // on successful submission clear the form and display success message
        if (r.sid) {
          setSubmissionSuccessful(true)
          openModal()
          setInputValues({
            name: "",
            email: "",
            message: "",
          })
        } else {
          // form submission failed
          setSubmissionSuccessful(false)
          openModal()
        }
      })
  }

  const handleInput = e => {
    e.persist()
    setInputValues(values => ({ ...values, [e.target.name]: e.target.value }))
  }

  return (
    <Layout>
      <SEO title="Contact | John Doe Photography" />
      <Banner image={data.contactImage.childImageSharp.fluid} />
      <section className="contact">
        <h2 className="contact__title">Get in touch.</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-form__fieldset">
            <label htmlFor="name">Full name</label>
            <input
              className="contact-form__input"
              type="text"
              name="name"
              id="name"
              placeholder="Please enter your name"
              required
              onChange={handleInput}
              value={inputValues.name}
            />
          </div>

          <div className="contact-form__fieldset">
            <label htmlFor="email">Email</label>
            <input
              className="contact-form__input"
              type="email"
              name="email"
              id="email"
              placeholder="Please enter your email"
              required
              onChange={handleInput}
              value={inputValues.email}
            />
          </div>

          <div className="contact-form__fieldset">
            <label htmlFor="message">Message</label>
            <textarea
              className="contact-form__input textarea"
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Please enter your message"
              required
              onChange={handleInput}
              value={inputValues.message}
            />
          </div>

          <button
            type="submit"
            className={`button contact-form__submit-button ${
              sending ? "contact-form__submit-button--disabled" : ""
            }`}
            disabled={sending}
          >
            Send Message
          </button>
        </form>
      </section>

      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        overlayClassName="contact-modal__overlay"
        className="contact-modal"
        contentLabel="Contact Form Successfully Submitted"
      >
        <div
          className={`contact-modal__header ${
            submissionSuccessful
              ? "contact-modal__header--success"
              : "contact-modal__header--failed"
          }`}
        >
          {submissionSuccessful && (
            <div
              className="contact-modal__icon"
              style={{
                backgroundImage: `url(${SuccessIcon})`,
              }}
            />
          )}

          {!submissionSuccessful && (
            <div
              className="contact-modal__icon"
              style={{
                backgroundImage: `url(${FailedIcon})`,
              }}
            />
          )}
        </div>
        <div className="contact-modal__text-wrapper">
          {submissionSuccessful && (
            <>
              <h2 className="contact-modal__title">Message Sent!</h2>
              <p className="contact-modal__text">
                Thank you for reaching out! I&apos;ll be in touch shortly.
              </p>
            </>
          )}

          {!submissionSuccessful && (
            <>
              <h2 className="contact-modal__title">Something went wrong!</h2>
              <p className="contact-modal__text">
                Please try again later or reach out to me on social media.
              </p>
            </>
          )}
          <button
            type="button"
            className="button contact-modal__close-btn"
            onClick={closeModal}
          >
            Okay
          </button>
        </div>
      </Modal>
    </Layout>
  )
}

export default Contact

export const query = graphql`
  query {
    contactImage: file(relativePath: { eq: "mountains.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

Contact.propTypes = {
  data: PropTypes.node.isRequired,
}
