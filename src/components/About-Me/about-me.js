import React from 'react'

const AboutMe = () => {
  return (
    <div>
      <img
        src={require('//src/section-icons/webDev Icon.png')}
        alt=""
        className={styles.SkillsIcon}
      />
      It's no secret that I love to learn and challenge myself. After a few
      years working in operations I knew it was time for a new challenge. I
      followed my intuition and enrolled in a web dev bootcamp. Since then I
      have been enjoying bringing my creative ideas into exisistence.
      <br></br>
      <br></br>I like the outdoors, the indoors, excellent foods, and keeping up
      with each new installment of the Legend of Zelda series. I've lived all
      over the US but the Utah mountains have convinced me to stay put for now.
    </div>
  )
}

export default AboutMe
