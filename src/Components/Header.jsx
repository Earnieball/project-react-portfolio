/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import HeaderPicture from '../Assets/abstract.jpg'
import ProfilePicture from '../Assets/profile.jpg'

const HeaderBackground = styled.header`
 
background-image: url(${HeaderPicture});
  background-size: cover;
  position: relative;
  height: 500px;
  resize: both;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 40px;
    margin: 0px 0px 0 30px;
    color: white;
  }
`

const IconWrapper = styled.div`
position: relative;
display:flex;
place-items: flex-end;
justify-content: end;
right: 390px;
top: 20px;

a {
     margin-right: 20px;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
      
    }
  }
`

const ProfileImage = styled.img`
    position:absolute;
    width: 250px;
    margin: 50px;
    right: 300px;
    top: 260px;
    border-radius: 50%;
    border: 2px solid #ffffff;
    `

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

export const Header = () => (
  <>
    <HeaderBackground>
      <IconWrapper>
        <a
          href="https://github.com/Earnieball"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="3x" color="#000000" />
        </a>
        <a
          href="https://www.linkedin.com/in/kim-svensson-149ba017a/"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="3x" color="#000000" />
        </a>
        <a
          href="https://stackoverflow.com/c/technigo/users/401"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faStackOverflow} size="3x" color="#000000" />
        </a>
      </IconWrapper>

      <Presentation>
        <p>Portfolio: <span>Kim Svensson</span></p>
        <h1>Frontend</h1>
        <h1>developer</h1>
      </Presentation>

    </HeaderBackground>
    <ProfileImage src={ProfilePicture} />
  </>
)