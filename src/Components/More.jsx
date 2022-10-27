import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faStackOverflow
} from '@fortawesome/free-brands-svg-icons'
import {
  ArticleOptionOne,
  InsideContainer,
  ColoredTitleWrapper,
  ColoredTitle
} from './StyledComponents'

const IconWrapperBottom = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const IconContainer = styled.div`
  margin: 20px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`

export const More = () => {
  return (
    <ArticleOptionOne>
      <InsideContainer>
        <ColoredTitleWrapper>
          <ColoredTitle>For more</ColoredTitle>
        </ColoredTitleWrapper>
        <IconWrapperBottom>
          <IconContainer>
            <a
              href="https://github.com/Earnieball"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="3x" color="#212427" />
            </a>
            <p>Github</p>
          </IconContainer>
          <IconContainer>
            <a
              href="https://www.linkedin.com/in/kim-svensson-149ba017a/"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="3x" color="#212427" />
            </a>
            <p>LinkedIn</p>
          </IconContainer>
          <IconContainer>
            <a
              href="https://stackoverflow.com/c/technigo/users/401"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faStackOverflow}
                size="3x"
                color="#212427" />
            </a>
            <p>Stackoverflow</p>
          </IconContainer>
        </IconWrapperBottom>
      </InsideContainer>
    </ArticleOptionOne>
  )
}