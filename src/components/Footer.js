import React from "react"
import * as styles from "../styles/footer.module.scss"
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram"
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook"
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube"
import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft"

export default function Footer() {
  return (
    <footer className={`${styles.footer} container-fluid bg-dark`}>
      <div className="row px-1 px-md-5 py-3 gap-md-0 gap-3">
        <div className="col-md-7 col-12">
          <input type="text" placeholder="Subscribe Us" />
          <button type="submit">
            <FaArrowLeft />
          </button>
        </div>
        <div className="col-md-5 col-12 d-flex justify-content-center gap-3 justify-content-md-end">
          <a href="https://www.instagram.com">
            <AiFillInstagram />
          </a>
          <a href="https://www.facebook.com">
            <AiFillFacebook />
          </a>
          <a href="https://www.youtube.com/">
            <AiFillYoutube />
          </a>
        </div>
      </div>
      <div className="row"></div>
    </footer>
  )
}
