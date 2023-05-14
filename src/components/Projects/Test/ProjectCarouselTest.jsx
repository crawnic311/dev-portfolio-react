import React, { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './ProjectCarouselTest.css' // Create this CSS file for styling

// const projects = [
//   {
//     id: 1,
//     title: 'Project 1',
//     description: 'Description for Project 1',
//     image: 'project1.jpg',
//   },
//   {
//     id: 2,
//     title: 'Project 2',
//     description: 'Description for Project 2',
//     image: 'project2.jpg',
//   },
//   {
//     id: 3,
//     title: 'Project 3',
//     description: 'Description for Project 3',
//     image: 'project3.jpg',
//   },
// ]

const ProjectCarouselTest = ({ projects }) => {
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length)
  }

  return (
    <div>
      <div className="Project">
        <TransitionGroup>
          <CSSTransition
            key={projects[currentProject].id}
            timeout={500}
            classNames="project-transition"
          >
            <div className="Project">
              <a
                className="Link"
                href={projects[currentProject].link}
                target="blank"
              >
                <img
                  className="Project-Preview"
                  src={process.env.PUBLIC_URL + projects[currentProject].image}
                  alt="preview"
                />
              </a>
              <div className="Project-Title">
                {projects[currentProject].title}
              </div>
              <p className="Project-Description">
                {projects[currentProject].description}
                <br />
                <br />
                {projects[currentProject].info}
                {projects[currentProject].title === 'Rekishi' ? (
                  <div>
                    {projects[currentProject].login}
                    <br />
                    {projects[currentProject].password}
                  </div>
                ) : (
                  <div></div>
                )}
              </p>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <div className="Nav-Container">
        <div className="Nav" onClick={prevProject}>
          <span className="Nav-Text">Previous</span>
        </div>
        <div className="Nav" onClick={nextProject}>
          <span className="Nav-Text">Next</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectCarouselTest
