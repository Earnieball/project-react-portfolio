import React from 'react'
import styled from 'styled-components'
import {
  ColoredTitle,
  InsideContainer,
  ArticleOptionOne,
  ColoredTitleWrapper
} from './StyledComponents'

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  grid-gap: 50px;
  @media (max-width: 400px) {
    grid-gap: 20px;
  }
`
const SkillsBox = styled.div`
  text-align: center;
  margin: 0;
  ul {
    list-style: none;
    display: inline;
    text-align: center;
    line-height: 25px;
  }
  li {
    font-size: 18px;
  }
  h5 {
    text-transform: uppercase;
    font-size: 20px;
    margin: 4px;
  }
`

export const Skills = () => {
  return (
    <ArticleOptionOne>
      <InsideContainer>
        <ColoredTitleWrapper>
          <ColoredTitle>Skills</ColoredTitle>
        </ColoredTitleWrapper>
        <SkillsWrapper>
          <SkillsBox>
            <h5>Code</h5>
            <ul>
              <li>HTML5 & CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux </li>
              <li>Node.js</li>
              <li> </li>
              <li> </li>
              <li> </li>
              <li> </li>
              <li> </li>
            </ul>
          </SkillsBox>
          <SkillsBox>
            <h5>Toolbox</h5>
            <ul>
              <li>Figma</li>
              <li>Slack</li>
              <li>Github</li>
            </ul>
          </SkillsBox>
          <SkillsBox>
            <h5>Upcoming</h5>
            <ul>
              <li>MongoDB</li>
              <li>React Native</li>
              <li>TypeScript</li>
            </ul>
          </SkillsBox>
          <SkillsBox>
            <h5>More</h5>
            <ul>
              <li> </li>
              <li> </li>
              <li> </li>
              <li> </li>
              <li> </li>
            </ul>
          </SkillsBox>
        </SkillsWrapper>
      </InsideContainer>
    </ArticleOptionOne>
  )
}