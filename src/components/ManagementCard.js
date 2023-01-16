import React from "react"
import { StaticImage } from "gatsby-plugin-image"
// import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram"
// import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook"
// import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube"

export default function ManagementCard({ classes }) {
  return (
    <div className={classes}>
      <div>
        <StaticImage
          src="../images/profile.webp"
          className="rounded-circle"
          imgClassName="img-fluid"
          width={100}
          height={100}
          alt="profile pic of management"
        />
      </div>
      <div>
        {/* name  */}
        <p className="display fw-bold">Sean Rogers</p>
        {/* designation  */}
        <p>Founder : Modball run</p>
        <p>
          <small>Email: xyx@mail.com</small>
        </p>
        <div className="d-flex justify-content-between fs-1 align-items-center gap-3">
          <a href="https://www.instagram.com" className="text-white">
            {/* <AiFillInstagram className="border-white border rounded p-1" /> */}
            <StaticImage
              src="../images/instagram.png"
              alt="instagram link img"
              imgClassName="img-fluid"
              width={30}
              height={30}
            />
          </a>
          <a href="https://www.facebook.com" className="text-white">
            <StaticImage
              src="../images/facebook.png"
              alt="facebook link img"
              imgClassName="img-fluid"
              width={30}
              height={30}
            />
            {/* <AiFillFacebook className="border-white border rounded p-1" /> */}
          </a>
          <a href="https://www.youtube.com/" className="text-white">
            <StaticImage
              src="../images/youtube.png"
              alt="youtube link img"
              imgClassName="img-fluid"
              width={30}
              height={30}
            />
            {/* <AiFillYoutube className="border-white border rounded p-1" /> */}
          </a>
        </div>
      </div>
    </div>
  )
}
