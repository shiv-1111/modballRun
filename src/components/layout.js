import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import Logobar from "./logobar"
import "./layout.scss"
import * as styles from "../styles/layoutPage.module.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={`${styles.heroWrapper} container-fluid p-0`}>
      <Logobar />
      <div className={`${styles.heroMidSection} container-fluid px-0`}>
        {children}
      </div>
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
