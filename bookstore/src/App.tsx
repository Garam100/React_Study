import React, { useState } from 'react'
import './App.css'
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
