import "@fontsource/ubuntu" // Importing lato font. Defaults to weight 400.

import React from "react"
import * as styles from "../styles/logobar.module.scss"
import { StaticImage } from "gatsby-plugin-image"

export default function Logobar() {
  return (
    <div className="container-fluid position-relative bg-dark">
      <div className="row text-center">
        <div
          className={`col-auto bg-light mx-auto d-flex justify-content-center align-items-center ${styles.logoContainer}`}
        >
          <StaticImage
            src="../images/logo.png"
            alt="logo"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row position-absolute w-100">
        <div className={`${styles.flag} col-12 p-0`}>
          <StaticImage
            src="../images/indiaFlag.png"
            alt="flag"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  )
}
