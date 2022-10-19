import React from 'react'
import { Header } from './Components/Header'
import Content from './Components/Content'
import Tech from './Components/Tech'
import Featured from './Components/Featured'
import About from './Components/About'

export const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Tech />
      <Featured />
      <About />
    </div>
  )
}
