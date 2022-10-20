/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import headerPicture from '../Assets/nature.jpg'
import profilePicture from '../Assets/profile.jpg'

const HeaderBackground = styled.header`
background-image: url(${headerPicture});
display: flex;
flex-direction: column;
position: relative;
background-position: stretch;
width:100%;
height: 500px;
`
const profilePicure = styled.img`
image: url(${profilePicture});
position: absolute;
width: 100px;
height: 100px;
`

const IconWrapper = styled.div`
display: flex;
justify-content: end;
margin: 20px;
place-items: flex-end;

img {
  width:50px;
}

a {
  margin: 10px;
  transition: all 0.2s ease-in-out;

  &hover {
    transform: scale (1.1);
  }
}

h1 {
  font-size: 200px;
  margin: 0px 0px 30px;
}

`

export const Header = () => {
  return (
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

      <section>
        <h1>Frontend</h1>
        <h1>developer</h1>
      </section>

    </HeaderBackground>

  )
}