import React from "react"
import * as styles from "../styles/footer.module.scss"
import { Link } from "gatsby"
// import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram"
// import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook"
// import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube"
// import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft"
import { IoMdCall } from "@react-icons/all-files/io/IoMdCall"
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"
import { StaticImage } from "gatsby-plugin-image"

export default function Footer() {
  return (
    <footer className={`${styles.footer} container-fluid my-2`}>
      <div className="row px-1 px-md-5 py-4 mb-2 gap-md-0 gap-3 bg-black">
        <div className="col-md-7 col-12">
          <input
            type="text"
            placeholder="Subscribe Us"
            className="rounded-pill px-4 shadow"
          />
          <button type="submit" className="btn shadow">
            <StaticImage src="../images/right.png" alt="submit button image" />
          </button>
        </div>
        <div className="col-md-5 col-12 d-flex justify-content-end gap-4">
          <a href="https://www.instagram.com" className="shadow">
            <StaticImage
              src="../images/instagram.png"
              alt="instagram link img"
            />
          </a>
          <a href="https://www.facebook.com" className="shadow">
            <StaticImage src="../images/facebook.png" alt="facebook link img" />
          </a>
          <a href="https://www.youtube.com/" className="shadow">
            <StaticImage src="../images/youtube.png" alt="youtube link img" />
          </a>
        </div>
      </div>
      <div className="row justify-content-md-between justify-content-center align-items-center bg-black">
        <div className="col-md-4 col-10 p-2 p-md-5 text-start">
          <div className="text-center">
            <StaticImage
              src="../images/modball run logo white.png"
              alt="logo"
              // className={`${styles.imgCont}`}
              width={120}
              height={120}
            />
          </div>
          <p className="text-light text-center">
            <small>
              Lorem ipsum dolor sit, amet consectetur adipisicing edivt. Sunt
              facidivs at consectetur saepe autem maxime expdivcabo adipisci
              amet iure animi.
            </small>
          </p>
        </div>
        <div className="col-md-4 col-10 p-2 p-md-5 d-flex justify-content-around align-items-center text-justify">
          <div className="d-flex justify-content-around gap-3 align-items-start flex-md-column">
            <div>
              <Link to="/" className="text-white text-decoration-none">
                Home
              </Link>
            </div>
            <div>
              <Link to="/about" className="text-white text-decoration-none">
                Tour
              </Link>
            </div>
            <div>
              <Link
                to="/participant"
                className="text-white text-decoration-none"
              >
                Participant
              </Link>
            </div>
            <div>
              <Link to="/shop" className="text-white text-decoration-none">
                Shop
              </Link>
            </div>
            <div>
              <Link to="/contact" className="text-white text-decoration-none">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-10 p-2 p-md-5 text-center d-flex align-items-center flex-md-column justify-content-center">
          <div className="d-flex align-items-start flex-md-column justify-content-around gap-4">
            <div>
              <Link to="/contact" className="btn border-white text-white">
                Contact Us
              </Link>
            </div>
            <div className="d-flex gap-3">
              <div>
                <AiOutlineMail className="text-white" />
              </div>
              <p className="text-white">modball@xyz.com</p>
            </div>
            <div className="d-flex gap-3">
              <div>
                <IoMdCall className="text-white" />
              </div>
              <div>
                <p className="text-white">+123456789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
