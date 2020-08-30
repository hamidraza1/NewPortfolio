import styled from "styled-components"
import { motion } from "framer-motion"

export const AboutDrawerContainer = styled(motion.div)`
  padding: 0;
  width: 50%;
  height: 100vh;
  background-color: rgb(244, 244, 244);

  left: 0;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
    position: absolute;
    bottom: 0;
  }
`
export const DrawerContent = styled(motion.div)`
  width: 80%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 120px;
  margin-top: 40px;
  display: block;
  @media (max-width: 1024px) {
    height: 20vh;
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    height: 20vh;
    margin-top: 20px;
  }
  @media (max-width: 375px) {
    height: 20vh;
    margin-top: 0;
    margin-left: 90px;
    width: 100%;
  }
`

export const DrawerName = styled(motion.div)`
  font-size: 20px;
  color: red;
  font-weight: 600;
  font-family: sans-serif;
  @media (max-width: 1024px) {
    margin-left: -50px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 375px) {
    font-size: 16px;
  }
`
export const DrawerSkills = styled(motion.div)`
  font-size: 50px;
  font-weight: 800;
  font-family: sans-serif;
  @media (max-width: 1024px) {
    font-size: 40px;
    margin-left: -50px;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    font-size: 35px;
  }
  @media (max-width: 580px) {
    font-size: 20px;
  }
  @media (max-width: 375px) {
    font-size: 20px;
  }
`
export const DrawerHome = styled(motion.div)`
  position: relative;
  font-size: 28px;
  font-weight: 800;
  margin: 40px;
  cursor: pointer;
  font-family: sans-serif;
  z-index: 30;
  display: inline-block;
`

export const Amid = styled(motion.div)`
  display: inline-block;
`
export const Contact = styled(motion.div)`
  margin-left: 120px;
  margin-top: 20px;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  line-height: 30px;
  display: inline-block;
  @media (max-width: 1024px) {
    margin-left: 70px;
    margin-top: 80px;
  }
  @media (max-width: 768px) {
    position: absolute;
    margin-top: -60px;
    margin-right: 20px;
    right: 0;
  }
  @media (max-width: 580px) {
    margin-top: 0px;
    line-height: 20px;
  }
  @media (max-width: 375px) {
    margin-top: 0px;
    line-height: 20px;
  }
`
export const Tel = styled(motion.div)`
  color: rgb(123, 123, 123);
`
export const LearnMore = styled(motion.div)`
  color: rgb(123, 123, 123);
  transform: rotate(90deg);
  display: inline-block;
  margin-top: 50px;
  margin-left: -100px;
  letter-spacing: 2px;
  @media (max-width: 1024px) {
    margin-left: -55px;
    margin-top: 130px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

//About Details
export const MySelf = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: row;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`
export const MySelfInner = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 150px;
  margin-top: 200px;
  margin-bottom: 200px;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
  @media (max-width: 640px) {
    width: 80%;
    margin-bottom: 20px;
  }
`
export const Hello = styled.div`
  color: red;
  font-size: 40px;
  font-weight: 800;
  font-family: sans-serif;
  align-content: start;
`
export const Motivation = styled.div`
  font-size: 16px;
  width: 80%;
  font-family: sans-serif;
  letter-spacing: 1px;
  line-height: 26px;
  text-align: justify;
`
export const ResumeLink = styled.div`
  width: 20%;
  color: red;
  font-family: sans-serif;
  margin-right: 50px;
  margin-top: 220px;
  margin-bottom: 200px;
  font-weight: 400;
  font-size: 20px;
  @media (max-width: 640px) {
    margin-top: 20px;
    margin-bottom: 200px;
    margin-left: 10px;
    width: 80%;
  }
`
