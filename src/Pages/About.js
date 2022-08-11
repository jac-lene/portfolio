import React from 'react'
import { Image } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Me from '../Images/srs.jpg'
import basics from '../Images/icons/3.png'
import boot from '../Images/icons/boot.png'
import django from '../Images/icons/django.png'
import mongo from '../Images/icons/mongo.png'
import postgres from '../Images/icons/postgres.png'
import pythonb from '../Images/icons/pythonbig.png'
import reactb from '../Images/icons/reactbig.png'
import vscode from '../Images/icons/vscode.png'

function About() {
  return (
    <div className='center'>
        <div className='spacer'></div>
        <div className='spacer'></div>

        <div className='about-cont1'>
        <div className='about-cont'>
            <Image src={Me} rounded className='about-img'/>
            <br/>
            <div className='about-txt'>
                <h2>Hey there! Jaclene here.</h2> 
                <h4>My pronouns are they/them.</h4>
                <br/>
                <h4 className='about-txt2'>I'm a people focused programmer with a desire to produce compassionate, engaging, and empowering work that builds community and brings joy. 
                <br/> <br/> 
                Let's work together to create something amazing.
                </h4>
            </div>
        </div>

        <div className='spacer'></div>
        <div className='spacer'></div>

        <div>
            <h2>Programs I work with:</h2>
        </div>

        <div className='spacer'></div>

        <Container className='about-grid'>
      <Row>
        <Col>
          <Image src={basics} rounded style={{width:'300px'}}/>
        </Col>
        <Col>          
          <Image src={reactb} rounded style={{width:'100px'}}/>
        </Col>
        <Col>          
          <Image src={django} rounded style={{width:'100px'}}/>
        </Col>
        <Col>          
          <Image src={postgres} rounded style={{width:'100px'}}/>
        </Col>
        <Col>          
          <Image src={pythonb} rounded style={{width:'100px'}}/>
        </Col>
        <Col>          
          <Image src={boot} rounded style={{width:'100px'}}/>
        </Col>
        <Col>          
          <Image src={mongo} rounded style={{width:'100px'}}/>
        </Col>
        <Col>          
          <Image src={vscode} rounded style={{width:'100px'}}/>
        </Col>
      </Row>
    </Container>

    <div className='spacer'></div>
    <div className='spacer'></div>

        </div>
    
    </div>
  )
}

export default About