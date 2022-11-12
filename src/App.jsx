import React from 'react'
import styled from 'styled-components'
import { Header } from './Components/Header'
import { ProfileInfo } from './Components/ProfileInfo'
import { MainProjects } from './Components/MainProjects'
import { MyThoughts } from './Components/MyThoughts'
import { Skills } from './Components/Skills'
import { More } from './Components/More'
import { Footer } from './Components/Footer'
import { ProjectList } from './Components/ProjectList'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const App = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <ProfileInfo />
        <MainProjects />
        <ProjectList />
        <MyThoughts />
        <Skills />
        <More />
        <Footer />
      </MainContainer>
    </>
  )
}
