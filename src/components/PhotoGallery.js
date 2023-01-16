import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/photoGallery.module.scss"

const wrapper = {
  width: "100vw",
}

export default function PhotoGallery({ wrapperClasses, textClasses, display }) {
  return (
    <div className="container-fluid bg-black pt-5">
      <div className={`${wrapperClasses} row d-flex align-items-center`}>
        <span
          className={`${textClasses} ${styles.halfPill} col-auto fw-bold  px-5 py-2`}
        >
          Photo Gallery
        </span>
        <span
          className={`${display} col-auto fw-bold btn btn-dark shadow rounded-pill me-5`}
        >
          View All
        </span>
      </div>
      <div className="row justify-content-around py-5">
        <div className="col-3 bg-light p-0 rounded d-flex justify-content-center align-items-center bg-black p-3">
          <StaticImage
            src="../images/gallery/photos/DSC08189.JPG"
            alt="gallery pic"
            className="rounded"
          />
        </div>
        <div className="col-5 bg-light p-0 rounded d-flex justify-content-center align-items-center bg-black shadow">
          <StaticImage
            src="../images/gallery/photos/DSC08083.JPG"
            alt="gallery pic"
            className="rounded shadow"
          />
        </div>
        <div className="col-3 bg-light p-0 rounded d-flex justify-content-center align-items-center bg-black p-3">
          <StaticImage
            src="../images/gallery/photos/DSC08076.JPG"
            alt="gallery pic"
            className="rounded"
          />
        </div>
      </div>
    </div>
  )
}
