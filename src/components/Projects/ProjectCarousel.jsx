import React, { useState } from 'react'

const ProjectCarousel = ({ projects }) => {
  const [currentProject, setCurrentProject] = useState(0)

  const handleNextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length)
  }

  const handlePrevProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length)
  }

  return (
    <div>
      <div></div>
      <div className="Project">
        <a
          className="Link"
          href={projects[currentProject].link}
          target="blank"
        ></a>
        <div className="Project-Title">{projects[currentProject].title}</div>
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
      <div className="Nav" onClick={handlePrevProject}>
        <span className="Nav-Text">Previous</span>
      </div>
      <div className="Nav" onClick={handleNextProject}>
        <span className="Nav-Text">Next</span>
      </div>
    </div>
  )
}

export default ProjectCarousel
