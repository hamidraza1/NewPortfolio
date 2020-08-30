import React, { useState } from "react"
import { useAnimation } from "framer-motion"
import {
  DrawerHome,
  Amid,
  DrawerContent,
  DrawerSkills,
  DrawerName,
  Contact,
  Tel,
  LearnMore,
} from "../styles/AboutDrawerStyles"

const container = {
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

const AboutDrawerContent = props => {
  const [hovered, sethovered] = useState(false)
  const drawerNameAnimation = useAnimation()
  return (
    <>
      <DrawerHome
        onMouseEnter={() => sethovered(!hovered)}
        onMouseLeave={() => sethovered(!hovered)}
        onClick={props.animateFunction}
        variants={container}
        initial="hidden"
        animate={hovered ? "show" : "hidden"}
      >
        H<Amid variants={item}>a</Amid>
        <Amid variants={item}>m</Amid>
        <Amid variants={item}>i</Amid>
        <Amid variants={item}>d</Amid>
      </DrawerHome>
      <DrawerContent>
        <DrawerName>Hamid Raza</DrawerName>
        <DrawerSkills>Developer,</DrawerSkills>
        <DrawerSkills>Hardworking,</DrawerSkills>
        <DrawerSkills>and Enthuiastic.</DrawerSkills>
      </DrawerContent>
      <Contact>
        <span>razahamidude95@gmail.com</span>
        <Tel>+49 157 82473557</Tel>
        <LearnMore>Learn More =></LearnMore>
      </Contact>
    </>
  )
}

export default AboutDrawerContent
