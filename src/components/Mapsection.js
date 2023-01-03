import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/mapsection.module.scss"

export default function Mapsection() {
  return (
    <div className={`container-fluid ${styles.mapWrapper} py-3 py-md-0`}>
      <div className="row h-100">
        <div className="col-md-6">
          <StaticImage
            src="../images/map.png"
            // width={800}
            // quality={95}
            formats={["AUTO", "WEBP"]}
            alt="tour map"
            className="img-fluid h-100"
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center text-bg-dark gap-3 p-5">
          <h2>
            The most exciting, one-of-a-kind & India's First Automobile
            Adventure & Endurance Valley Run is here!
          </h2>
          <h1>The Mod Ball Run!</h1>
          <p>
            Incredible fleet of cars rallying through the Paradise of India, to
            run echoes through the valleys and adrenaline through your veins
            with High-Performance Cars, Tuned Engines and Super Cars. This
            exciting event aims to inspire automobile enthusiasts to build a
            culture by bonding as a community of Explorers, and Adventure
            seekers
          </p>
        </div>
      </div>
    </div>
  )
}
