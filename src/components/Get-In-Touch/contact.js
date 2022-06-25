import React from 'react'

const Contact = () => {
  return (
    <div>
      <p className="Contact-Quip">
        Looking for a mild-mannered Web Dev with an affinity for Dad jokes? Let
        me know!
      </p>
      <div className="Contact-Line" id="Contact-Address">
        Orem, UT 84057
      </div>
      <div className="Contact-Line" id="Contact-Email">
        dillon.craw@gmail.com
      </div>
      <div className="Contact-Buttons-Holder">
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
