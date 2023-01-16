import React from "react"
import * as styles from "../styles/participantBar.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram"
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook"
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube"

export default function ParticipantBar({
  profilePic,
  name,
  team,
  carName,
  carPic,
}) {
  return (
    <div
      className={`row rounded-pill bg-black shadow text-light my-4 py-2 mx-md-5 mx-2 overflow-hidden ${styles.wrapper}`}
    >
      {/* name and team section  */}
      <div className="col-md-5 col-12 d-flex justify-content-md-start justify-content-around align-items-center gap-md-4">
        <div className="bg">
          <StaticImage
            // src={profilePic}
            src="../images/profile.webp"
            alt="profile pic"
            imgClassName="img-fluid"
            className="rounded-circle"
            // height="100%"
            width={80}
            height={80}
          />
        </div>
        <div>
          <p className="text-capitalize text-center text-nowrap m-auto">
            Name : {name}
            <br />
            <small>Team : {team}</small>
          </p>
        </div>
      </div>
      {/* social links section  */}
      <div className="col-md-2 col-6 d-flex justify-content-around fs-1 align-items-center m-auto gap-3">
        <a href="https://www.instagram.com" className="text-white">
          {/* <AiFillInstagram className="border-white border rounded p-1" /> */}
          <StaticImage
            src="../images/instagram.png"
            alt="instagram link img"
            className="p-1"
            width={30}
            height={30}
          />
        </a>
        <a href="https://www.facebook.com" className="text-white">
          <StaticImage
            src="../images/facebook.png"
            alt="facebook link img"
            className="p-1"
            width={30}
            height={30}
          />
          {/* <AiFillFacebook className="border-white border rounded p-1" /> */}
        </a>
        <a href="https://www.youtube.com/" className="text-white">
          {/* <AiFillYoutube className="border-white border rounded p-1" /> */}
          <StaticImage
            src="../images/youtube.png"
            alt="youtube link img"
            className="p-1"
            width={30}
            height={30}
          />
        </a>
      </div>
      {/* car info  */}
      <div className="col-md-5 col-6 d-flex justify-content-md-end justify-content-center gap-4 align-items-center">
        <div>
          <p className="text-capitalize text-center">
            <small>Car:</small>
            <br />
            {carName}
          </p>
        </div>
        <div>
          <StaticImage
            // src={carPic}
            src="../images/car.jpg"
            alt="car pic"
            imgClassName="img-fluid"
            className="rounded-circle"
            // height="100%"
            width={80}
            height={80}
          />
        </div>
      </div>
    </div>
  )
}
