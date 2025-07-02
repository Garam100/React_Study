import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'react-bootstrap'
import Content from './layout/Content';
import Footer from './layout/Footer';
import Header from './layout/Header'

const App : React.FC = () => {
  return(
    <div className='App'>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  )
}


export default App
