import React from "react"
// import * as styles from "../styles/participant.module.scss"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import ParticipantBar from "../components/ParticipantBar"
import ManagementCard from "../components/ManagementCard"
import Footer from "../components/Footer"

export default function participant() {
  const list = [
    {
      name: "S Bhaskar",
      team: "kalinga racers",
      carName: "Honda Brio",
      carPic: "../images/car.jpg",
      profilePic: "../images/profile.png",
      id: 1,
    },
    {
      name: "A Bhaskar",
      team: "kalinga racers",
      carName: "Honda Brio",
      carPic: "../images/car.jpg",
      profilePic: "../images/profile.png",
      id: 2,
    },
    {
      name: "b Bhaskar",
      team: "kalinga racers",
      carName: "Honda Brio",
      carPic: "../images/car.jpeg",
      profilePic: "../images/profile.png",
      id: 3,
    },
    {
      name: "f Bhaskar",
      team: "kalinga racers",
      carName: "Honda Brio",
      carPic: "../images/car.jpeg",
      profilePic: "../images/profile.png",
      id: 4,
    },
    {
      name: "m Bhaskar",
      team: "kalinga racers",
      carName: "Honda Brio",
      carPic: "../images/car.jpeg",
      profilePic: "../images/profile.png",
      id: 5,
    },
    {
      name: "the Bhaskar",
      team: "kalinga racers",
      carName: "Honda Brio",
      carPic: "../images/car.jpeg",
      profilePic: "../images/profile.png",
      id: 6,
    },
  ]
  return (
    <>
      <Layout className="bg-light">
        <div className={`container-fluid p-0`}>
          <StaticImage
            src="../images/participantBanner.jpg"
            alt="banner img"
            className="p-0 w-100"
            formats={["AUTO", "WEBP"]}
            imgClassName="img-fluid"
          />
        </div>
      </Layout>
      <div className="container-fluid text-light bg-black">
        <h1 className="display-5 p-4 text-center text-uppercase">
          Participants
        </h1>
      </div>
      <div className="container-fluid">
        {list.map(racer => {
          return (
            <ParticipantBar
              profilePic={racer.profilePic}
              name={racer.name}
              carName={racer.carName}
              carPic={racer.carPic}
              team={racer.team}
              key={racer.id}
            />
          )
        })}
      </div>
      <div className="container-fluid text-light bg-black">
        <h1 className="display-5 p-4 text-center text-uppercase">
          Connect with Management
        </h1>
      </div>
      <div className="container-md container-fluid">
        <div className="row">
          <div className="col-12">
            <ManagementCard classes="d-flex justify-content-center align-items-center gap-4 bg-black text-white m-auto p-4 rounded shadow mb-4" />
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-10 col-sm-6 m-auto">
            <ManagementCard classes="d-flex justify-content-center align-items-center gap-4 bg-black text-white p-4 rounded shadow mb-4" />
          </div>
          <div className="col-10 col-sm-6 m-auto">
            <ManagementCard classes="d-flex justify-content-center align-items-center gap-4 bg-black text-white p-4 rounded shadow mb-4" />
          </div>
          {/* <ManagementCard classes="col-3 d-flex justify-content-center align-items-center gap-4 bg-dark text-white p-4 rounded shadow mb-4" /> */}
        </div>
      </div>
      <Footer />
    </>
  )
}
