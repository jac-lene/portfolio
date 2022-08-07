import React, { useEffect } from 'react'
import CarouselComp from '../Components/CarouselComp'


function Home() {

  return (
    <div>
  
        <div className='home-cont center'>
          <div className='hello'>
            <h1>Hello! I'm Jaclene.</h1> 
            <h3>Software engineer, puzzle solver, knitter, builder, creative. I'd love to work with you!</h3>
          </div>

        <div>
          <CarouselComp />
        </div>

        </div>


    </div>
  )


}

export default Home