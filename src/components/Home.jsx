import React from 'react'
import gif from '../images/programmer.gif'
 import Common from './Common'

function Home() {
    return (
        <>

         <Common
         name="Grow your business with"
         imgsrc= {gif}
         visit="/service"
         btname="Get Started"
         />
             
        </>
    )
}

export default Home;
