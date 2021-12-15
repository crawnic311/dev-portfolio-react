import React from 'react'
import './App.css'
import Headline from './components/Headline/name-position'
import AboutMe from './components/About-Me/about-me'

function App() {
  return (
    <div className="App">
      <div>
        <Headline />
      </div>
      <div>
        <AboutMe />
      </div>
    </div>
  )
}

export default App
