import React, { useEffect } from 'react'
import CarouselComp from '../Components/CarouselComp'

import Raccoon from '../Images/1.png'

function Home() {

  return (
    <div>
  
        <div className='home-cont'>
          <div className='hello'>
            <h1>Hello! I'm Jaclene.</h1> 
            <h3>Software engineer, puzzle solver, knitter, builder, creative.</h3>
          </div>

        <div>
          <CarouselComp />
        </div>

        </div>


    </div>
  )


}

export default Home