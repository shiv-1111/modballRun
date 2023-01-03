import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Register() {
  return (
    <div className="row">
      <div className="col-12 col-md-8">
        <StaticImage
          src="../images/registerNow.png"
          alt="banner"
          className="img-fluid"
        />
      </div>
      <div className="col-md-4 col-12 d-flex align-items-center justify-content-center">
        <form className="bg-light w-100 w-md-80 m-3 p-4 shadow d-flex flex-column gap-4 justify-content-center">
          <div className="d-flex flex-column gap-4 justify-content-center">
            <input
              type="text"
              name="name"
              id=""
              placeholder="Your name here"
              className="p-1 form-control border-0 shadow"
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Your mail here"
              className="p-1 form-control border-0 shadow"
            />
            <input
              type="number"
              name="phone"
              id=""
              placeholder="Your number here"
              className="p-1 form-control border-0 shadow"
            />
          </div>
          <div className="align-self-end">
            <button type="submit" className="btn btn-dark shadow">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
