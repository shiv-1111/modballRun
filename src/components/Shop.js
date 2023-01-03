import React from "react"
import * as styles from "../styles/shop.module.scss"
import { StaticImage } from "gatsby-plugin-image"

export default function Shop() {
  return (
    <div className={`${styles.wrapper} bg-light container-fluid py-md-0 py-3`}>
      <div className="row h-100">
        <div className="col-md-6">
          <StaticImage
            src="../images/hoodie.png"
            alt="hoodie"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <a href="https://www.google.com/">
            <button type="button" className="text-white px-3 px-md-5">
              Shop Now
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
