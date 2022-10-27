import React from 'react'
import styled from 'styled-components'
import BackGroundImage from '../Assets/abstract.jpg'

const FooterBackground = styled.section`
  width: 100%;
  height: 250px;
  background-image: url(${BackGroundImage});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: top;
  color: #fff;
  h2 {
    text-transform: uppercase;
  }
  p {
    margin: 2px;
  }
`

export const Footer = () => {
  return (
    <FooterBackground>
      <h2>Contact</h2>
      <p>Kim Svensson</p>
      <p>+46 766 23 28 92</p>
      <p>Svensson.kim88@gmail.com</p>
    </FooterBackground>
  )
}