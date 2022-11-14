import styled from 'styled-components'

export const ArticleOptionOne = styled.article`
  padding: 50px 0 50px 0;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  p {
    font-size: 20px;
  }
`

export const ArticleOptionTwo = styled.article`
text-align: center;
padding: 50px 0 50px 0;
display: flex;
flex-direction: column;
align-items: center;
p {
  font-size: 20px;
}
`
export const ArticleOptionThree = styled.article`
  padding: 50px 0 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  p {
    font-size: 20px;
  }
`
export const ArticleOptionFour = styled.article`
text-align: center;
background-color: #f4f4f4;
width: 100%;
padding: 50px 0 50px 0;
display: flex;
flex-direction: column;
align-items: center;
p {
  font-size: 20px;
}
`

export const InsideContainer = styled.div`
  width: 80%;
`

export const ColoredTitle = styled.h3`
  background-color: #c70251;
  padding: 10px;
  word-break: none;
  text-transform: uppercase;
  color: white;
  line-height: 27px;
  font-size: 25px;
  font-weight: 500;
  box-shadow: rgb(0 0 0 / 10%) 0px 20px 25px -5px,
    rgb(0 0 0 / 4%) 0px 10px 10px -5px;
  @media (max-width: 420px) {
    font-size: 18px;
  }
`
export const ColoredTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`

export const Tag = styled.span`
  color: #fff;
  background-color: #c70251;
  border: none;
  font-size: 10px;
  padding: 4px;
  margin-right: 10px;
  box-shadow: rgb(0 0 0 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px,
    rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px,
    rgb(0 0 0 / 9%) 0px -3px 5px;
`
export const TagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 5px;
`