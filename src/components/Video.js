import React from "react"
import * as styles from "../styles/video.module.scss"
import video from "../assets/video/myvideo.mp4"

export default function Video() {
  return (
    <div className={`${styles.videoWrapper}`}>
      <video loop autoPlay muted className={styles.videoEle}>
        <source src={video} type="video/mp4" />
        Video not supported by your browser.
      </video>
    </div>
  )
}
