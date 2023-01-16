import React from "react"
import * as styles from "../styles/shop.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const shopBtn = {
  color: "#f4e502",
  borderColor: "#f4e502",
}

export default function Shop() {
  return (
    <div
      className={`${styles.wrapper} container-fluid py-md-0 py-3 bg-black my-2`}
    >
      <div className="row h-100 py-5">
        <div className="col-md-8">
          <StaticImage
            src="../images/shop-img-dark-bg-bt-small.png"
            alt="hoodie"
            imgClassName="img-fluid "
          />
        </div>
        <div className="col-md-4">
          <a href="https://www.google.com/">
            <button
              type="button"
              className="btn fw-bold fs-2 p-3 px-5 rounded-pill"
              style={shopBtn}
            >
              Shop Now
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
