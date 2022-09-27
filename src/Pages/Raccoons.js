import React from 'react'
import { Image } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import mockup from '../Images/Work/raccoons/mockup.png'
import racstart from '../Images/Work/raccoons/racstart.png'
import win from '../Images/Work/raccoons/win.png'
import fullrac from '../Images/Work/raccoons/fullrac.png'

function Raccoons() {
  return (
    <div className='center'>
    <div className='detail-cont'>
    <div className='spacer'></div>
    <div className='spacer'></div>


    <h1>Raccoons</h1>
    <h4>Vanilla Javascript</h4>
    <br/>
    <h5>Try it {" "}
      <a href='https://pages.git.generalassemb.ly/jac-lene/project1/' target="_blank" rel="noreferrer noopener">
        here
        </a>
      </h5>
    <h5>Check out my code {" "}
      <a href='https://github.com/jac-lene/Raccoons-Game' target="_blank" rel="noreferrer noopener">
      here
      </a>
    </h5>
  
    <div className='spacer'></div>
    
    <Image src={mockup} rounded fluid className='sock-img'/>

    <div className='spacer'></div>
    <div className='spacer'></div>

      <h4 className='align-txt'>Raccoons follows the structure of gaming classic Battleship, set in a brand new environment.</h4>


      <div className='align-cont'>

    <div className='spacer'></div>
    <div className='spacer'></div>

    <Container className='gyst-grid'>
      <Row>
      <Col>          
          <Image src={fullrac} rounded className='grid-img'/>
        </Col>
        <Col>          
          <Image src={win} rounded className='grid-img'/>
        </Col>
      </Row>
    </Container>

    </div>

    <div className='spacer'></div>
    <div className='spacer'></div>
    </div>
  </div>
  )
}

export default Raccoons