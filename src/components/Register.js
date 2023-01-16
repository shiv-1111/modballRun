import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/register.module.scss"

export default function Register() {
  return (
    <div className="row position-relative">
      <div
        className={`col-12 d-flex align-items-center justify-content-center p-0 ${styles.imgCont}`}
      >
        <StaticImage
          src="../images/registerBanner-small.JPG"
          alt="banner"
          imgClassName="img-fluid w-100"
        />
      </div>
      <div className="col-md-6 col-lg-5 col-10 d-flex align-items-center justify-content-center position-absolute ">
        <form className="w-100 w-md-80 m-3 p-4 d-flex flex-column gap-4 justify-content-center">
          <div>
            <h2 className="text-white">Register Now</h2>
          </div>
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
              style={{ color: "#e93323" }}
            />
            <input
              type="number"
              name="phone"
              id=""
              placeholder="Your number here"
              className="p-1 form-control border-0 shadow"
              style={{ color: "#e93323" }}
            />
          </div>
          <div className="align-self-start">
            <button
              type="submit"
              className="btn text-white shadow"
              style={{ backgroundColor: "#e93323" }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
