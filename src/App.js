import React from 'react'
import './App.css'
import Headline from './components/Headline/name-position'
import AboutMe from './components/About-Me/about-me'
import Skills from './components/Skills/skills'
import ProjectHeadline from './components/Projects/projects-headline'
import ProjectCarousel from './components/Projects/ProjectCarousel'
import Mineseeper from './components/Projects/Mineseeper'
import Rekishi from './components/Projects/Rekishi'
import ContactHeadline from './components/Get-In-Touch/contact-headline'
import Contact from './components/Get-In-Touch/contact'
import SkillsHeadline from './components/Skills/skills-headline'
import Menu from './components/Headline/menu'
import AboutMeHeadline from './components/About-Me/about-me-headline'
import Foody from './components/Projects/More/MoreProjects/Foody'
import StealthScribe from './components/Projects/More/MoreProjects/StealthScribe'

function App() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Project 2',
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Project 3',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ]

  return (
    <div className="App">
      <img
        src={require('../src/bg-images/Banff 45 OP.jpg')}
        alt=""
        className="BG-Image"
      />
      <Menu />
      <div className="App-Headline-Section" id="Headline-BG-Image">
        <a className="Logo" href=""></a>
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
          <div className="App-Projects-Container">
            <ProjectCarousel projects={projects} />
          </div>
        </div>
      </div>
      <div id="Headline-BG-Image">
        <div className="App-Contact-Section">
          <ContactHeadline />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App
