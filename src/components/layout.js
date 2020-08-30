import React from "react"
import PropTypes from "prop-types"
/* import { useStaticQuery, graphql } from "gatsby" */
import Home from "../components/home"

import "./layout.css"

const Layout = ({ children }) => {
  /* const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `) */

  return (
    <>
      <Home />
      {/*  <main>{children}</main> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
