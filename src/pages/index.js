import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { Seo } from "../components/seo"
import Video from "../components/Video"
import Mapsection from "../components/Mapsection"
import Shop from "../components/Shop"
import Footer from "../components/Footer"
import Register from "../components/Register"

const IndexPage = () => (
  <>
    <Layout>
      <Video />
    </Layout>
    <Mapsection />
    <Shop />
    <div className="container-fluid">
      <Register />
    </div>
    <Footer />
  </>
)

export default IndexPage

export const Head = () => <Seo />

{
  /* <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          /> */
}
