import React from "react"
import {
  Hello,
  Motivation,
  MySelf,
  ResumeLink,
  MySelfInner,
} from "../styles/AboutDrawerStyles"
const AboutDetails = props => {
  return (
    <MySelf style={{ display: props.name ? "none" : "flex" }}>
      <MySelfInner>
        <Hello>Hello,</Hello>
        <Motivation>
          Passion for writing computer programs lead me from Engineering to Web
          Development with objective to create and maintain functional websites
          and applications. I am looking for an opportunity that will allow me
          to improve my programming,communication and teamwork skills.
        </Motivation>
      </MySelfInner>
      <ResumeLink>Download My Resume.</ResumeLink>
    </MySelf>
  )
}

export default AboutDetails
