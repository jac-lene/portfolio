import React, { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

import Raccoon from '../Images/1.png'

function Home() {

useEffect(() => { 
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {});
  })
}, [])

  return (
    <div>
  
        <div className='home-cont'>
          <div className='hello'>
            <h1>Hello! I'm Jaclene.</h1> 
            <h3>Software engineer, puzzle solver, knitter, builder, creative.</h3>
          </div>

        <div className="carousel">
          <a className="carousel-item" href="#one!"><img src={Raccoon} style={{width:'300px'}} /></a>
          <a className="carousel-item" href="#two!"><img src={Raccoon} style={{width:'300px'}} /></a>
          <a className="carousel-item" href="#three!"><img src={Raccoon} style={{width:'300px'}} /></a>
          <a className="carousel-item" href="#four!"><img src={Raccoon} style={{width:'300px'}} /></a>
          <a className="carousel-item" href="#five!"><img src={Raccoon} style={{width:'300px'}} /></a>
        </div>


        </div>


    </div>
  )


}

export default Home