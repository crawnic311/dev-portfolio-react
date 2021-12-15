import React from 'react'
import './App.css'
import Headline from './components/Headline/name-position'
import AboutMe from './components/About-Me/about-me'
import Skills from './components/Skills/skills'
import ProjectHeadline from './components/Projects/projects-headline'
import ContactHeadline from './components/Get-In-Touch/contact-headline'
import Contact from './components/Get-In-Touch/contact'

function App() {
  return (
    <div className="App">
      <div className="App-Headline-Section">
        <Headline />
      </div>
      <div className="App-AboutMe-Section">
        <AboutMe />
      </div>
      <div className="App-Skills-Section">
        <Skills />
      </div>
      <div>
        <ProjectHeadline />
      </div>
      <div>
        <ContactHeadline />
        <Contact />
      </div>
    </div>
  )
}

export default App
