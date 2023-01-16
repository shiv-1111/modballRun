import React from "react"
import Layout from "../components/layout"
import Video from "../components/Video"
import Mapsection from "../components/Mapsection"
import PhotoGallery from "../components/PhotoGallery"
import GalleryContainer from "../components/GalleryContainer"
import Footer from "../components/Footer"

const halfPill = {
  border: "1px solid white",
  borderRadius: "0 150px 150px 0",
  borderLeft: "none",
  background: "white",
  color: "black",
}

export default function Tour() {
  return (
    <>
      <Layout>
        <Mapsection />
      </Layout>
      <PhotoGallery
        display="d-none"
        wrapperClasses="justify-content-start"
        textClasses="fw-4"
      />
      <GalleryContainer />
      <div className="container-fluid text-start px-0 py-5 bg-black mt-2">
        <span
          className="fw-4 px-5 text-dark p-2 fw-bold bg-white"
          style={halfPill}
        >
          Video Gallery
        </span>
      </div>
      <Video />
      <GalleryContainer />
      <Footer />
    </>
  )
}
