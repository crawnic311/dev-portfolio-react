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
      <div className="Rekishi">
        <a
          className="Rekishi-Link"
          href="https://www.rekishi.io/"
          target="blank"
        ></a>
        <div className="Project-Title">Rekishi</div>
        <p className="Project-Description">
          An up-and-coming community for all things Anime and Comics!
          <br />
          <br />
          I'm building this web app using react.js node.js and firebase. It's
          still in production but feel free to take a look around. Login to our
          test account with these credentials:
          <br />
          rekishitester@gmail.com
          <br />
          rekishi123
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
