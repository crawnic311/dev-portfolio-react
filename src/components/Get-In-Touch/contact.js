import React from 'react'

const Contact = () => {
  return (
    <div>
      <div>Orem, UT 84057</div>
      <div>dillon.craw@gmail.com</div>
      <div>
        <button>
          <a
            href="https://docs.google.com/document/d/1E6UPWmel1o5LDudCTl6ecdWPIph7kBgzAJEWmtAK6N4/edit"
            target="_blank"
            className="Contact-Button"
            id="Resume-Button"
          >
            Resume
          </a>
        </button>
        <button>
          <a
            href="https://www.linkedin.com/in/dillon-craw"
            target="_blank"
            className="Contact-Button"
            id="LinkedIn-Button"
          >
            LinkedIn
          </a>
        </button>
        <button>
          <a
            href="https://github.com/crawnic311"
            target="_blank"
            className="Contact-Button"
            id="Github-Button"
          >
            Github
          </a>
        </button>
      </div>
    </div>
  )
}

export default Contact
