import React from "react"
import videoBg from "../assets/video/myvideo.mp4"
import * as styles from "../styles/video.module.scss"

export default function Video() {
  return (
    <div className={`${styles.videoWrapper}`}>
      <video loop autoPlay muted className={styles.videoEle}>
        <source
          // src="https://ik.imagekit.io/uexzh6xkp/myVideo.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1672752833711"
          src={videoBg}
          type="video/mp4"
        />
        Video not supported by your browser.
      </video>
    </div>
  )
}
