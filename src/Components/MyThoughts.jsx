import React from 'react'
import styled from 'styled-components'
import {
  ColoredTitle,
  ArticleOptionOne,
  InsideContainer,
  ColoredTitleWrapper
} from './StyledComponents'

const ArticleImg = styled.img`
  width: 100%;
`
const ArticleWrapper = styled.div`
  text-align: start;
  h4 {
    margin: 3px;
    text-transform: uppercase;
  }
  span {
    color: #c62a88;
    font-weight: 800;
  }
  a {
    text-decoration: none;
    color: black;
  }
`
const Date = styled.h4`
  color: #c62a88;
  text-transform: uppercase;
`

export const MyThoughts = () => {
  return (
    <ArticleOptionOne>
      <InsideContainer>
        <ColoredTitleWrapper>
          <ColoredTitle>My thoughts</ColoredTitle>
        </ColoredTitleWrapper>
        <ArticleImg src="https://thumbs2.imgbox.com/e3/97/m789AdGd_t.jpg" />
        <ArticleWrapper>
          <Date>Oct 17</Date>
          <a
            href="https://medium.com/p/58988507dec7"
            target="_blank"
            rel="noopener noreferrer">
            <h4>My thoughts on programming so far. </h4>
            <p>
             Even though its only been a couple of months since I started my journey
             in programming I feel like Ive been through alot already.
             In this article I try to put words into the experience so far,
             the ups and downs and the absolute joy of working in a team! <span>&gt;&gt;</span>
            </p>
          </a>
        </ArticleWrapper>
        <h3> </h3>
        <ArticleWrapper>
          <Date> </Date>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer">
            <h4> </h4>
            <p />
          </a>
        </ArticleWrapper>
      </InsideContainer>
    </ArticleOptionOne>
  )
}