import React from 'react'
import Common from './Common'
import web from '../images/home-animation.gif'

function About() {
    return (
        <>
          <Common
          name="Welcome to about page"
          imgsrc={web}
          visit="/contact"
          btname="Contact Now"
          
          />
        </>
    )
}

export default About
