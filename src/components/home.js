import React, { useState, useEffect, useRef } from "react"
import AboutDrawerContent from "./AboutDrawerContent"
import AboutDetails from "./AboutDetails"
import WorkDetails from "./WorkDetails"
import { useAnimation } from "framer-motion"
/* import { BsArrowLeft, BsArrowRight } from "react-icons/bs" */

import {
  HomeContainer,
  Video,
  Name,
  AboutMe,
  MyWork,
  FrontInfo,
  A,
  Ab,
  W,
  Wo,
} from "../styles/homeStyles"
import {
  AboutDrawerContainer,
  Amid,
  DrawerHome,
} from "../styles/AboutDrawerStyles"

const container = {
  hidden: {
    opacity: 0,
    scale: 1.5,
    transition: {},
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      delay: 0.1,
    },
  },
}

const item = {
  hidden: {
    opacity: [1, 0.1, 0],

    transform: "translateX(-10px)",
    transition: { times: [0, 0.1, 0.5] },
  },
  show: {
    opacity: [0, 0.7, 1],
    transform: "translateX(0px)",
  },
}

const container1 = {
  hidden: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item1 = {
  hidden: {
    opacity: [1, 0.1, 0],
    transform: "translateX(-10px)",
    transition: { times: [0, 0.1, 0.5] },
  },
  show: {
    opacity: [0, 0.7, 1],
    transform: "translateX(0px)",
  },
}

const Home = () => {
  const drawerAnimation = useAnimation()
  const aboutAnimation = useAnimation()
  const vid = useRef()
  const [name, setName] = useState(true)
  const [work, setWork] = useState(false)
  const [hovered, sethovered] = useState(false)

  const animateFunction = () => {
    if (work) {
      setWork(!work)
    }
    setName(!name)
    vid.current.play()
  }
  const workAnimateFunction = () => {
    if (!work) {
      setWork(!work)
    }

    if (!name) {
      setName(!name)
    }
    setTimeout(() => vid.current.play(), 1000)
  }

  const bringHome = () => {
    if (work) {
      setWork(!work)
    }
  }

  useEffect(() => {
    if (!name) {
      drawerAnimation.start("hidden")
      aboutAnimation.start("hidden")
    }
    if (name) {
      drawerAnimation.start("visible")
      aboutAnimation.start("visible")
    }
    console.log(name)
    console.log(work)
    console.log("........")
  }, [drawerAnimation, aboutAnimation, name, work])

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {/* <div
        style={{
          position: "absolute",
          height: "100vh",
          width: "100%",
          zIndex: "1000",
          backgroundColor: "yellow",
        }}
      ></div> */}
      <DrawerHome
        onMouseEnter={() => sethovered(!hovered)}
        onMouseLeave={() => sethovered(!hovered)}
        style={{
          position: "absolute",
          color: "rgb(230,230,250)",
          zIndex: "20",
          display: name ? "block" : "none",
          position: "fixed",
        }}
        variants={container1}
        onClick={bringHome}
        initial="hidden"
        animate={hovered ? "show" : "hidden"}
      >
        H<Amid variants={item1}>a</Amid>
        <Amid variants={item}>m</Amid>
        <Amid variants={item}>i</Amid>
        <Amid variants={item}>d</Amid>
        <Amid variants={item}>.</Amid>
      </DrawerHome>

      <HomeContainer>
        {/*   //Video.......................... */}

        <Video
          videoCenter
          style={work ? { position: "fixed" } : { position: "absolute" }}
        >
          <video
            ref={vid}
            style={
              work
                ? {
                    width: "80%",
                    height: "80%",
                    opacity: "0.2",
                    transition: "width 1s,height 1s",
                  }
                : {
                    width: !work && name ? "100%" : "50%",
                    position: !work && name ? "" : "absolute",
                    right: !work && name ? "" : "0",

                    height: "100%",
                    opacity: "0.5",
                    transition: "width 1.5s,height 1.5s,right 1.5s ",
                  }
            }
            muted
            src={
              work
                ? require("../video/video-reverse.mp4")
                : require("../video/videoo.mp4")
            }
          />
        </Video>
        {/*  //AboutDrawerContainer.................... */}
        <AboutDrawerContainer
          animate={drawerAnimation}
          initial="visible"
          variants={{
            visible: {
              x: -800,
              transition: { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] },
            },
            hidden: {
              x: 0,
              transition: { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] },
            },
          }}
        >
          <AboutDrawerContent
            name={name}
            animateFunction={animateFunction}
            work={work}
          />
        </AboutDrawerContainer>
        {/*   //Front Info..................// */}
        <FrontInfo>
          <AboutMe
            animate={aboutAnimation}
            initial="visible"
            variants={{
              visible: {
                opacity: 1,
                transition: { duration: 1.6, ease: [0.6, 0.05, -0.01, 0.9] },
              },
              hidden: {
                opacity: 0,

                transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] },
              },
            }}
            onClick={animateFunction}
          >
            <Ab>About Me</Ab>
            <A>A</A>
          </AboutMe>

          <Name
            variants={container}
            initial="hidden"
            animate={name ? "show" : "hidden"}
          >
            {work ? (
              <>
                <Amid variants={item}>W</Amid>
                <Amid variants={item}>O</Amid>
                <Amid variants={item}>R</Amid>
                <Amid variants={item}>K</Amid>
              </>
            ) : (
              <>
                {" "}
                <Amid variants={item}>H</Amid>
                <Amid variants={item}>a</Amid>
                <Amid variants={item}>m</Amid>
                <Amid variants={item}>i</Amid>
                <Amid variants={item}>d</Amid>
                <Amid variants={item}>.</Amid>
              </>
            )}
          </Name>
          <MyWork
            style={
              work
                ? {
                    display: "none",
                  }
                : {
                    display: "block",
                  }
            }
            onClick={workAnimateFunction}
          >
            <Wo>My Work </Wo>
            <W>W</W>
          </MyWork>
        </FrontInfo>
      </HomeContainer>
      <AboutDetails name={name} />
      <WorkDetails work={work} />
    </div>
  )
}

export default Home
