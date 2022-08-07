import React from 'react'
import { Image } from 'react-bootstrap'

import Sock from '../Images/Work/sock.png'
import Patt from '../Images/Work/patt.png'

function Socklab() {
  return (
    <div className='center'>
      <div className='spacer'></div>


      <h1>Socklab</h1>
      <h4>Full Stack Developer, React and Django</h4>
      <br/>
      <h5>Check out my code: {" "}
        <a href='https://github.com/jac-lene/Sock-Lab-Frontend' target="_blank" rel="noreferrer noopener">
        Front
        </a>
        {" / "}
        <a href='https://github.com/jac-lene/Sock-Lab-Backend' target="_blank" rel="noreferrer noopener">
        Back
        </a>
      </h5>
    
      <div className='spacer'></div>
      
      <Image src={Sock} rounded className='sock-img'/>
      <div className='spacer'></div>

        <h4 className='sock-txt'>SockLab is a design experience that allows the user to customize a sock knitting pattern using a visual laboratory inspired by the custom design experience of shoe brands like Nike and Vans. 
          <br/> <br/>
        Designed and engineered over a 3 week period, SockLab is a fully responsive, full stack MERN website with full CRUD functionality and RESTful Django framework. Developed with React frontend, Django backend, Postgres SQL and bespoke UI with CSS styling.</h4>

      <div className='spacer'></div>
      <Image src={Patt} rounded className='sock-img'/>


      <div className='spacer'></div>
      <div className='spacer'></div>
    </div>
  )
}

export default Socklab