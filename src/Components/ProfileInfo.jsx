import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import {

  ArticleOptionTwo,
  InsideContainer,
  ColoredTitle,
  ColoredTitleWrapper,
  ArticleOptionFour
} from './StyledComponents'

const IconWrapper = styled.span`
    padding: 20px;
`

export const ProfileInfo = () => {
  return (
    <>
      <ArticleOptionTwo>
        <InsideContainer>
          <p>
            <IconWrapper>
              <FontAwesomeIcon icon={faCode} size="2x" color="#c70251" />
            </IconWrapper>
            Hello there! My name is Kim, an up and coming frontend developer.
            I`m one of those grinders who loves to get down in the nitty-gritty of things.
            My moto has always been ``learning by doing`` and diving head first into
            frontend development has really been a fun challenge.
          </p>

          <p>
            Much of my free time is spent with my dog Ekko. Music has been a big part
            of my life since I was a child, playing the guitar is relaxing therapy!
            Also love gaming with friends!

          </p>
        </InsideContainer>
      </ArticleOptionTwo>
      <ArticleOptionFour>
        <InsideContainer>
          <ColoredTitleWrapper>
            <ColoredTitle>Tech</ColoredTitle>
          </ColoredTitleWrapper>
          <p>
            HTML, CSS, JavaScript & TypeScript, React, Redux, APIs, Git, Web
            Accessibility, Mob- and pair-programming, Github
          </p>
        </InsideContainer>
      </ArticleOptionFour>
    </>
  )
}