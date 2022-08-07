import React from 'react'
import Me from '../Images/srs.jpg'
import { Image } from 'react-bootstrap'

function About() {
  return (
    <div className='center'>
        <div className='about-cont'>
            <Image src={Me} rounded style={{width:'600px'}} className='about-img'/>
            <br/>
            <div className='about-txt'>
                <h2>I'm Jaclene.</h2>
            </div>
            
        
        



        </div>
    
    </div>
  )
}

export default About