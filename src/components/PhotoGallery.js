import React from "react"

const wrapper = {
  width: "100vw",
}

export default function PhotoGallery() {
  return (
    <div className="container-fluid bg-dark py-5">
      <div className="row justify-content-between px-5">
        <span className="col-auto fw-bold text-light d-grid place-items-center">
          Photo Gallery
        </span>
        <span className="col-auto fw-bold btn btn-light shadow rounded-pill">
          View All
        </span>
      </div>
      <div className="row justify-content-around py-5">
        <div className="col-4 bg-light p-0 rounded d-flex justify-content-center align-items-end bg-dark">
          <img
            src="https://thumbs.dreamstime.com/b/vintage-red-motorcycle-generic-motorbike-old-motor-cycle-parked-green-grass-yard-countryside-48374308.jpg"
            alt="gallery pic"
            width="95%"
            height="95%"
            className="rounded"
          />
        </div>
        <div className="col-4 bg-light p-0 rounded d-flex justify-content-center align-items-center bg-dark">
          <img
            src="https://thumbs.dreamstime.com/b/vintage-red-motorcycle-generic-motorbike-old-motor-cycle-parked-green-grass-yard-countryside-48374308.jpg"
            alt="gallery pic"
            width="100%"
            height="100%"
            className="rounded shadow"
          />
        </div>
        <div className="col-4 bg-light p-0 rounded d-flex justify-content-center align-items-end bg-dark">
          <img
            src="https://thumbs.dreamstime.com/b/vintage-red-motorcycle-generic-motorbike-old-motor-cycle-parked-green-grass-yard-countryside-48374308.jpg"
            alt="gallery pic"
            width="95%"
            height="95%"
            className="rounded"
          />
        </div>
      </div>
    </div>
  )
}
