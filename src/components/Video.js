import React from "react"
import video from "../assets/video/myvideo.mp4"
import * as styles from "../styles/video.module.scss"

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
