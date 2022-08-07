import React from 'react'
import Me from '../Images/srs.jpg'
import { Image } from 'react-bootstrap'

function About() {
  return (
    <div className='center'>
        <div className='spacer'></div>
        <div className='spacer'></div>
        <div className='about-cont'>
            <Image src={Me} rounded style={{width:'600px'}} className='about-img'/>
            <br/>
            <div className='about-txt'>
                <h2>Hey there! Jaclene here.</h2> 
                <h4>My pronouns are they/them.</h4>
                <br/>
                <h4>I'm a people focused programmer with a desire to produce compassionate, engaging, and empowering work that builds community and brings joy. 
                <br/> <br/> 
                Let's work together and create something amazing.
                </h4>
            </div>
            
        
        



        </div>
    
    </div>
  )
}

export default About