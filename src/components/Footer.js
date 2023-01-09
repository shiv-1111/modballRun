import React from "react"
import * as styles from "../styles/footer.module.scss"
import { Link } from "gatsby"
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram"
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook"
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube"
import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft"
import { IoMdCall } from "@react-icons/all-files/io/IoMdCall"
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"
import { StaticImage } from "gatsby-plugin-image"

export default function Footer() {
  return (
    <footer className={`${styles.footer} container-fluid`}>
      <div className="row px-1 px-md-5 py-3 gap-md-0 gap-3 bg-dark mb-2 ">
        <div className="col-md-7 col-12">
          <input
            type="text"
            placeholder="Subscribe Us"
            className="rounded-pill px-4 shadow"
          />
          <button type="submit" className="shadow">
            <FaArrowLeft />
          </button>
        </div>
        <div className="col-md-5 col-12 d-flex justify-content-center gap-3">
          <a href="https://www.instagram.com" className="shadow">
            <AiFillInstagram />
          </a>
          <a href="https://www.facebook.com" className="shadow">
            <AiFillFacebook />
          </a>
          <a href="https://www.youtube.com/" className="shadow">
            <AiFillYoutube />
          </a>
        </div>
      </div>
      <div className="row justify-content-md-between justify-content-center align-items-center bg-dark">
        <div className="col-md-4 col-10 p-2 p-md-5 text-center">
          <div className="pb-5">
            <StaticImage
              src="../images/logo.png"
              alt="logo"
              className={`${styles.imgCont} text-white`}
            />
          </div>
          <p className="text-light">
            <small>
              Lorem ipsum dolor sit, amet consectetur adipisicing edivt. Sunt
              facidivs at consectetur saepe autem maxime expdivcabo adipisci
              amet iure animi.
            </small>
          </p>
        </div>
        <div className="col-md-4 col-10 p-2 p-md-5 d-flex justify-content-around gap-3 align-items-center text-justify flex-md-column">
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
            <Link to="/participant" className="text-white text-decoration-none">
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
        <div className="col-md-4 col-10 p-2 p-md-5 text-center d-flex align-items-center flex-md-column justify-content-around">
          <Link to="/contact" className="btn btn-light">
            Contact Us
          </Link>
          <div className="py-4">
            <div>
              <IoMdCall className="text-white" />
            </div>
            <div>
              <p className="text-white">+123456789</p>
            </div>
          </div>
          <div>
            <div>
              <AiOutlineMail className="text-white" />
            </div>
            <p className="text-white">modball@xyz.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
