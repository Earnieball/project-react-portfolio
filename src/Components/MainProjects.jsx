import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import data from '../Assets/ProjectsData.json'
import {
  InsideContainer,
  Tag,
  TagContainer,
  ColoredTitle,
  ColoredTitleWrapper,
  ArticleOptionThree
} from './StyledComponents'

const CardInfo = styled.div`

  padding-bottom: 30px;
  width: 100%;
  word-break: break-all;
  img {
    width: 100%;
    display: block;
  }
`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  a {
    text-decoration: none;
    color: #000;
    position: relative;
    display: block;
  }
  @media (max-width: 798px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(156, 166, 197, 0.5);
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: transparent;
  }
`
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-between;
`

export const MainProjects = () => {
  return (
    <ArticleOptionThree>
      <InsideContainer>
        <ColoredTitleWrapper>
          <ColoredTitle>Featured Projects</ColoredTitle>
        </ColoredTitleWrapper>

        <CardContainer>
          {data.map((item) => (
            <CardInfo key={item.title}>
              <a
                href={item.netlify}
                alt="project landingpage"
                target="_blank"
                rel="noopener noreferrer">
                <CardOverlay />
                <img src={item.image} alt="project poster" />
              </a>
              <DetailsWrapper>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <CardFooter>
                  <TagContainer>
                    {item.tools.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </TagContainer>
                  <a
                    href={item.github}
                    alt="project landingpage"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="3x"
                      color="#212427" />
                  </a>
                </CardFooter>
              </DetailsWrapper>
            </CardInfo>
          ))}
        </CardContainer>
      </InsideContainer>
    </ArticleOptionThree>
  )
}