import React from 'react'
import { Image } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import mockup from '../Images/Work/gyst/mockup.png'
import mock2 from '../Images/Work/gyst/mockup1.png'
import entry from '../Images/Work/gyst/entry.png'
import entry2 from '../Images/Work/gyst/entry2.png'
import attrib from '../Images/Work/gyst/attributions.png'
import home from '../Images/Work/gyst/home.png'
import signup from '../Images/Work/gyst/signup.png'

function Gyst() {
  return (
    <div className='center'>

    <div className='spacer'></div>


    <h1>GYST Habit Tracker</h1>
    <h4>Express and MongoDB</h4>
    <br/>
    <h5>Check out my code {" "}
      <a href='https://github.com/jac-lene/Gyst-Habit-Tracker' target="_blank" rel="noreferrer noopener">
      here
      </a>
    </h5>
  
    <div className='spacer'></div>
    <div className='align-cont'>
    <Image src={mockup} rounded fluid className='sock-img'/>

    <div className='spacer'></div>

      <h4 className='align-txt'>GYST - Get Your Sh!t Together.<br/><br/>Gyst is an app created to do one thing simply, beautifully, and intuitively: track your habits. Gyst presents your daily doings in a minimalist, gender neutral interface that gives you an at-a-glance view of your daily patterns.</h4>

    <div className='spacer'></div>

    <Image src={mock2} rounded fluid className='sock-img'/>

    <div className='spacer'></div>
    <div className='spacer'></div>

    <Container className='gyst-grid'>
      <Row>
        <Col>
          <Image src={home} rounded className='sock-img' style={{height:'400px'}}/>
        </Col>
        <Col>          
          <Image src={signup} rounded className='sock-img' style={{height:'400px'}}/>
        </Col>
        <Col>          
          <Image src={entry} rounded className='sock-img' style={{height:'400px'}}/>
        </Col>
        <Col>          
          <Image src={entry2} rounded className='sock-img' style={{height:'400px'}}/>
        </Col>
      </Row>
    </Container>

    </div>
    


    <div className='spacer'></div>
    <div className='spacer'></div>
   
  </div>
  )
}

export default Gyst