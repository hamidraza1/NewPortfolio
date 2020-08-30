import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const Name = styled(motion.div)`
  font-size: 185px;
  font-weight: 600;
  color: #c7c7c7;
  font-family: sans-serif;
  text-shadow: 0px 2px 25px rgba(0, 0, 0, 0.7);
  letter-spacing: 1rem;
  margin: 0;
  padding: 0;
  display: flex;

  @media (max-width: 1024px) {
    font-size: 140px;
    letter-spacing: 0.2rem;
  }
  @media (max-width: 768px) {
    font-size: 120px;
    letter-spacing: 0.2rem;
  }
  @media (max-width: 640px) {
    font-size: 90px;
    letter-spacing: 0.2rem;
  }
  @media (max-width: 580px) {
    font-size: 70px;
    letter-spacing: 0.2rem;
  }
  @media (max-width: 375px) {
    font-size: 60px;
    letter-spacing: 0.2rem;
  }
`
export const AboutMe = styled(motion.div)`
  font-size: 25px;
  font-weight: 400;
  display: flex;
  align-items: center;
  color: #c7c7c7;
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  cursor: pointer;
  position: fixed;
  left: 0;
  z-index: 20;
  margin-left: 12px;
  transition: 0.5s;
  &:hover {
    color: white;
  }
  @media (max-width: 1024px) {
    font-size: 22px;
    margin-top: -30px;
  }
  @media (max-width: 768px) {
    font-size: 19px;
    color: white;
  }
`
export const Ab = styled(motion.p)`
  @media (max-width: 768px) {
    display: none;
  }
`
export const A = styled(motion.p)`
  position: fixed;
  z-index: 20;
  font-size: 18px;
  top: 50;
  color: red;
  background: #c7c7c7;
  font-family: sans-serif;

  cursor: pointer;
  font-weight: 600;
  border: 2px solid red;
  border-radius: 100%;
  padding: 14px 18px;
  margin-top: 30px;
  @media (min-width: 769px) {
    display: none;
  }
  @media (min-width: 375px) {
    font-size: 12px;
    padding: 10px 14px;
  }
`
export const MyWork = styled(motion.div)`
  font-size: 25px;
  font-weight: 400;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  color: #c7c7c7;
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  cursor: pointer;
  position: fixed;
  right: 0;
  z-index: 20;
  margin-right: 12px;
  transition: 0.5s;
  &:hover {
    color: white;
  }
  @media (max-width: 1024px) {
    font-size: 22px;
    margin-top: -30px;
  }
  @media (max-width: 768px) {
    font-size: 19px;
    color: white;
  }
`
export const Wo = styled(motion.p)`
  @media (max-width: 768px) {
    display: none;
  }
`
export const W = styled(motion.p)`
  position: fixed;
  z-index: 20;
  font-size: 18px;
  top: 50;
  margin-top: -10px;
  margin-left: -55px;
  color: red;
  background: #c7c7c7;
  font-family: sans-serif;
  font-family: sans-serif;
  cursor: pointer;
  font-weight: 600;
  border: 2px solid red;
  border-radius: 100%;
  padding: 14px 18px;

  @media (min-width: 769px) {
    display: none;
  }
  @media (min-width: 375px) {
    font-size: 12px;
    padding: 10px 14px;
  }
`
export const HomeContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`

export const FrontInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  justify-content: center;
  position: absolute;
`
export const Video = styled.div`
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
  z-index: -1;
  background: black;

  ${props =>
    props.videoCenter &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  video {
    width: auto;
    object-fit: cover;
    @media (max-width: 768px) {
      width: 100% !important;
    }
  }
`
