import React from 'react';
import styled from 'styled-components/macro';
import {
  ArticleOptionOne,
  ColoredTitle,
  ColoredTitleWrapper
} from './StyledComponents'

const ProjectListStyle = styled.div`
  
  padding: 45px 0;
  .sub-title{
    display: flex;
    justify-content: center;
  }
  .other-projects-wrapper{
    padding: 15px 0px 15px 0px;
    margin: 0px;
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
`;
export const ProjectList = () => {
  return (
    <ArticleOptionOne>
      <ProjectListStyle>
        <ColoredTitleWrapper>
          <ColoredTitle>OTHER PROJECTS</ColoredTitle>
        </ColoredTitleWrapper>

        <div className="title-other-projects-wrapper" />
        <div className="other-projects-wrapper">
          <div className="project-row">
            <a
              className="link-other-projects"
              href=""
              target="_blank"
              rel="noreferrer">
              <h2 className="project-title">MUSIC RELEASES</h2>
              <div className="text">- A project in React, fetching data from an API. <h2 className="project-title"> &gt;&gt;</h2></div>
            </a>
          </div>

          <div className="project-row">
            <a
              className="link-other-projects"
              href=""
              target="_blank"
              rel="noreferrer">
              <h2 className="project-title">CHATBOT</h2>
              <div className="text">- A project focusing on basic javascript.<h2 className="project-title"> &gt;&gt;</h2></div>
            </a>
          </div>
        </div>
      </ProjectListStyle>
    </ArticleOptionOne>
  );
};
