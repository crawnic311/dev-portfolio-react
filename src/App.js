import React from 'react'
import './App.css'
import Headline from './components/Headline/name-position'
import AboutMe from './components/About-Me/about-me'
import Skills from './components/Skills/skills'
import ProjectHeadline from './components/Projects/projects-headline'
import ContactHeadline from './components/Get-In-Touch/contact-headline'
import Contact from './components/Get-In-Touch/contact'
import SkillsHeadline from './components/Skills/skills-headline'
import Menu from './components/Headline/menu'
import AboutMeHeadline from './components/About-Me/about-me-headline'

function App() {
  return (
    <div className="App">
      <img
        src={require('../src/bg-images/Banff 45 OP.jpg')}
        alt=""
        className="BG-Image"
      />
      <Menu />
      <div className="App-Headline-Section" id="Headline-BG-Image">
        <Headline />
      </div>
      <div className="Gradient-Wrapper-AboutMe">
        <div className="App-AboutMe-Section">
          <AboutMeHeadline />
          <AboutMe />
        </div>
      </div>
      <div className="Gradient-Wrapper-Skills">
        <div className="App-Skills-Section">
          <SkillsHeadline />
          <Skills />
        </div>
      </div>
      <div className="Gradient-Wrapper-Projects">
        <div className="App-Projects-Section">
          <ProjectHeadline />
        </div>
      </div>
      <div className="App-Contact-Section">
        <ContactHeadline />
        <Contact />
      </div>
    </div>
  )
}

export default App
