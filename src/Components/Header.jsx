import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faStackOverflow
} from '@fortawesome/free-brands-svg-icons'
import BackGroundImage from '../Assets/abstract.jpg'
import ProfilePicture from '../Assets/profile.jpg'

const HeaderBackground = styled.header`
  background-image: url(${BackGroundImage});
  background-size: cover;
  position: relative;
  height: 500px;
  resize: both;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 40px;
    margin: 0px 0px 0 30px;
  }
  h2 {
    font-size: 20px;
    margin: 10px 0px 0 30px;
  }
  


`

const IconWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin: 20px;
  place-items: flex-end;
  img {
    width: 50px;
  }
  a {
    margin: 10px;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`
const ProfileImage = styled.img`
    position:absolute;
    width: 190px;
    margin: 50px;
    right: -20px;
    top: 230px;
    border-radius: 50%;
    border: 4px solid #ffffff;
    @media (min-width: 770px) {
    
    }
  
  @media (min-width: 900px) {
      
      right: 10%;
      width: 230px;
  } 
   @media (min-width: 1200px) {
      right: 15%;
  }
  @media (min-width: 1600px) {
      right: 20%;
  }
 `;

const Presentation = styled.section`
    margin-top: 20px;
    width: 375px;
    margin-left: 20%;
    height: 300px;
    color: white;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    
    
p {
  font-size: 120%;
  margin-left: 30px;
}
span {
font-weight: bold;
}
h1 {
 text-transform: lowercase;
 font-size: 42px;
 line-height: 49px;
 
}
    `

export const Header = () => {
  return (
    <>
      <HeaderBackground>
        <IconWrapper>
          <a
            href="https://github.com/Earnieball"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="3x" color="#212427" />
          </a>
          <a
            href="https://www.linkedin.com/in/kim-svensson-149ba017a/"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="3x" color="#212427" />
          </a>
          <a
            href="https://stackoverflow.com/c/technigo/users/401"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faStackOverflow} size="3x" color="#212427" />
          </a>
        </IconWrapper>
        <Presentation>
          <p>Portfolio: <span>Kim Svensson</span></p>
          <h1>Frontend</h1>
          <h1>developer</h1>
        </Presentation>

      </HeaderBackground>
      <ProfileImage id="mypicture" src={ProfilePicture} alt="profile" />
    </>
  )
}
