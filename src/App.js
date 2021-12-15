import React from 'react'
import './App.css'
import Headline from './components/Headline/name-position'
import AboutMe from './components/About-Me/about-me'
import Skills from './components/Skills/skills'
import ProjectHeadline from './components/Projects/projects-headline'
import ContactHeadline from './components/Get-In-Touch/contact-headline'

function App() {
  return (
    <div className="App">
      <div>
        <Headline />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <ProjectHeadline />
      </div>
      <div>
        <ContactHeadline />
      </div>
    </div>
  )
}

export default App
