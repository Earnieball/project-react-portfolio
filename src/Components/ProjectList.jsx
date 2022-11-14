/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  ArticleOptionOne,
  ColoredTitle,
  ColoredTitleWrapper,
  Tag
} from './StyledComponents'
import data from '../Assets/OtherProjectsData.json'

const ProjectListStyle = styled.div`
  
  padding: 45px 0;
  .sub-title{
    display: flex;
    justify-content: center;
  }

  .project-title{
    display: inline;
  }
  .link-other-projects {
    text-decoration: none;
  }
  .project-row{
    display: inline;
    margin: 30px 0;
  } 
`
const OtherProjectsDisplay = styled.section`
padding: 10px 0 10px 0;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
background-color: white;

a {
    color: black;

    :link {
      text-decoration: none;
    }
    margin: 10px;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
      text-decoration: underline;
    }
    
  }


`
const OverLinedHeading = styled.h2`
text-align: center;

`
const ProjectText = styled.p`
text-align: center;
`

const TagContainer = styled.div`
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
gap: 5px;
padding: 5%;
`

export const ProjectList = () => {
  return (
    <ArticleOptionOne>
      <ProjectListStyle>
        <ColoredTitleWrapper>
          <ColoredTitle>OTHER PROJECTS</ColoredTitle>
        </ColoredTitleWrapper>
        {data.map((item) =>
          <OtherProjectsDisplay key={item.id}>
            <a
              href={item.netlify}
              target="_blank"
              rel="noreferrer"
              role="button">
              <OverLinedHeading>{item.title}</OverLinedHeading>
              <ProjectText>{item.description}</ProjectText>
            </a>
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
            <TagContainer>
              {item.tools.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagContainer>
          </OtherProjectsDisplay>)}
      </ProjectListStyle>
    </ArticleOptionOne>
  );
};
