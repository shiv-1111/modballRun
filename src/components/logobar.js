import "@fontsource/ubuntu" // Importing lato font. Defaults to weight 400.

import React from "react"
import * as styles from "../styles/logobar.module.scss"
import { StaticImage } from "gatsby-plugin-image"

export default function Logobar() {
  return (
    <div className="container-fluid position-relative">
      <div className="row text-center">
        <div
          className={`col-auto mx-auto d-flex justify-content-center align-items-center ${styles.logoContainer}`}
        >
          <StaticImage
            src="../images/modball run logo balck.png"
            alt="logo"
            imgClassName="img-fluid"
          />
        </div>
      </div>
      <div className={`row position-absolute w-100 ${styles.flag}`}>
        <StaticImage
          src="../images/indiaFlag.svg"
          alt="flag"
          className=""
          imgClassName="img-fluid"
        />
      </div>
    </div>
  )
}
