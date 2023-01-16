import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Footer from "../components/Footer"

export default function contact() {
  return (
    <div>
      <Layout>
        <StaticImage
          src="../images/contactBanner.jpg"
          alt="contact us banner image"
          imgClassName="img-fluid"
          formats={["AUTO", "WEBP"]}
          // width={100}
          // height={100}
          // className="w-100 h-100"
        />
      </Layout>
      <form className="container bg-white p-5 my-5 shadow-lg rounded">
        <div className="row">
          <div className="col-12 col-md-10 my-2">
            <h2 className="display fw-bold">How can we help you?</h2>
            <p>Drop a line.</p>
            <p>
              <small className="fw-bold">Don't hesitate to contact us.</small>
            </p>
          </div>
        </div>
        <div className="row gap-4">
          <div className="col-12 col-md-10 d-flex gap-3">
            <input
              type="text"
              placeholder="First Name"
              className="form-control"
              name="firstName"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="form-control"
              name="lastName"
            />
          </div>
          <div className="col-12 col-md-10 d-flex gap-3">
            <input
              type="text"
              placeholder="example@xyz.com"
              className="form-control"
              name="email"
            />
            <input
              type="number"
              placeholder="Your number here"
              className="form-control"
              name="lastName"
            />
          </div>
          <div className="col-12 col-md-10">
            <select
              name="contactType"
              id="contactType"
              className="form-control"
              defaultValue={"Select an option"}
            >
              <option disabled className="text-muted">
                Select an option
              </option>
              <option value="Enquiry">Enquire with us</option>
              <option value="Suggestion">Suggestions for us</option>
              <option value="Complain">Report an issue</option>
            </select>
          </div>
          <div className="col-12 col-md-10">
            <textarea
              name="description"
              // cols="30"
              rows="7"
              className="form-control"
              placeholder="Your query here"
            ></textarea>
          </div>
          <div className="col-12 col-md-10">
            <button className="btn btn-danger fw-bold" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  )
}
