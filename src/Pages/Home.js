import React, { useEffect } from 'react'
import CarouselComp from '../Components/CarouselComp'


function Home() {

  return (
    <div>
        <div className='spacer'></div>

        <div className='home-cont center'>

          <div className='hello'>
            <h1>Hello! I'm Jaclene.</h1> 
            <h4>Software engineer, puzzle solver, knitter, builder, creative. <br/><br/> I'd love to work with you!</h4>
          </div>

        <div>
          <CarouselComp />
        </div>

        </div>
<div className='spacer'></div>

    </div>
  )


}

export default Home