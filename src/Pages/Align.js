import React from 'react'
import { Image } from 'react-bootstrap'

import Ali from '../Images/Work/align.png'
import img1 from '../Images/Work/align/img1.png'
import img2 from '../Images/Work/align/img2.png'
import img3 from '../Images/Work/align/img3.png'

function Align() {
  return (
    <div className='center'>

      <div className='spacer'></div>


      <h1>Align Astrological Dating</h1>
      <h4>Front End React Developer</h4>
      <h4>Project managed a team of three</h4>
      <br/>
      <h5>Check out my code: {" "}
        <a href='https://github.com/aschweik766/breakfast-club-FrontEnd' target="_blank" rel="noreferrer noopener">
        Front
        </a>
        {" / "}
        <a href='https://github.com/aschweik766/breakfastClub-backEnd' target="_blank" rel="noreferrer noopener">
        Back
        </a>
      </h5>
    
      <div className='spacer'></div>
      
      <Image src={Ali} rounded fluid className='align-img'/>
      <div className='spacer'></div>

        <h4 className='align-txt'>Together as a team of 3, we developed online dating and personalized horoscope platform inspired by our own desires to connect with others in new ways. As the stars align, so can users on our Align App for a dose of daily love horoscopes and online dating.</h4>

      <div className='spacer'></div>

      <div className='align-cont'>

      <Image src={img3} rounded fluid className='sock-img'/>
      <div className='spacer'></div>
      <Image src={img1} rounded fluid style={{height:'400px'}}/>
      <div className='spacer'></div>
      <Image src={img2} rounded fluid className='sock-img'/>

      </div>
      


      <div className='spacer'></div>
      <div className='spacer'></div>
      
      
      Align
    </div>
  )
}

export default Align