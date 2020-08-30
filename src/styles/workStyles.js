import styled from "styled-components"
import { motion } from "framer-motion"

export const Project = styled(motion.div)`
  width: 70%;
  height: 75vh;
  background: black;
  margin-bottom: 150px;
  display: flex;
  justify-content: center;
  position: relative;
  @media (max-width: 1024px) {
    margin-bottom: 100px;
    height: 60vh;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 0px;
    height: 65vh;
  }
  @media (max-width: 640px) {
    width: 100%;
    margin-bottom: 0px;
    height: 55vh;
  }
  img {
    height: 100%;
    width: 100%;
    transform: scale(1);
    transition: 0.5s;
    opacity: 0.4;
    &:hover {
      transform: scale(1.1);
      transition: 0.5s;
      opacity: 1;
      cursor: pointer;
      @media (max-width: 1024px) {
      }
      @media (max-width: 768px) {
        transform: scale(1);
        transition: 0.5s;
        opacity: 1;
        cursor: pointer;
      }
    }
  }
`
export const ProjectName = styled(motion.div)`
  color: white;
  z-index: 10;
  position: absolute;
  font-size: 85px;
  font-weight: 600;
  top: 50%;
  font-family: sans-serif;
  letter-spacing: 5px;
  transform: scale(1);
  transition: 0.5s;
  pointer-events: none;
  @media (max-width: 1024px) {
    font-size: 70px;
    letter-spacing: 2px;
  }
  @media (max-width: 768px) {
    font-size: 60px;
    letter-spacing: 2px;
  }
  @media (max-width: 640px) {
    font-size: 40px;
    letter-spacing: 2px;
  }
  ${Project}:hover & {
    transform: scale(1.2);
    color: rgb(255, 140, 0);
    transition: 0.5s;
    @media (max-width: 768px) {
      transform: scale(1.3);
      color: rgb(255, 140, 0);
      transition: 0.5s;
    }
  }
`
