import React, { useRef } from "react"
import { Project, ProjectName } from "../styles/workStyles"

const WorkDetails = props => {
  const span = useRef()
  return (
    <div
      style={
        props.work
          ? {
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginTop: "-140px",
              alignItems: "center",
              zIndex: "10",
            }
          : {
              display: "none",
              flexDirection: "column",
              width: "100%",
              marginTop: "-80px",
              alignItems: "center",
              zIndex: "10",
            }
      }
    >
      <Project>
        <ProjectName ref={span}>AWWWARDS</ProjectName>
        <img src={require(`../images/awards.jpg`)} alt="" />
      </Project>
      <Project>
        <ProjectName>SHIELD</ProjectName>
        <img src={require(`../images/shield.jpg`)} alt="" />
      </Project>
      <Project>
        <ProjectName>MINDMAP</ProjectName>
        <img src={require(`../images/minmapp.jpg`)} alt="" />
      </Project>
      <Project>
        <ProjectName>
          CHAT
          <br /> DASHBOARD
        </ProjectName>
        <img src={require(`../images/chat.jpg`)} alt="" />
      </Project>
    </div>
  )
}

export default WorkDetails
