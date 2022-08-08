import React from 'react'

/**
 * This is how to bootstraping components and containers
 * This is the only way to make a code more readable and simple
 */
import {Blog, Features, Footer, Header, Possibility, WhatGP3} from './containers/index'
import {Article, Brand, CTA, Feature, Navbar} from './components/index'
import './App.css'

const App = () => {
  return (
    <div className = "App">
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGP3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App