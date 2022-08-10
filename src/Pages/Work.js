import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

import Sock from '../Images/Work/sock.png'
import Align from '../Images/Work/align.png'
import Gyst from '../Images/Work/gyst/mockup.png'
import Racc from '../Images/Work/raccoons/mockup.png'

function Work() {
  return (
    <div className='center'>

            <div className='spacer'></div>

        <div className='work-cont'>
            <div className='work-name'>
                <h3 className='work-title'>SockLab Customizer</h3>
                <h4 className='work-subtitle'>React and Django</h4>
                <br/>
                <Link to='/work/socklab'><h4 className='seemore'>See More</h4></Link>
            </div>

            <Image src={Sock} className='work-sockimg' rounded/>
        </div>

<div className='spacer'></div>

     <div className='work-cont' style={{flexDirection:'row'}}>
            <div className='work-name'>
                <h3 className='work-title'>Align Astro Dating</h3>
                <h4 className='work-subtitle'>React and Django</h4>
                <br/>
                <Link to='/work/align'><h4 className='seemore'>See More</h4></Link>
            </div>

            <Image src={Align} className='work-alignimg' rounded/>


        </div>

<div className='spacer'></div>

     <div className='work-cont' >
            <div className='work-name'>
                <h3 className='work-title'>GYST Habit Tracker</h3>
                <h4 className='work-subtitle'>Express and MongoDB</h4>
                <br/>
                <Link to='/work/gyst'><h4 className='seemore'>See More</h4></Link>
            </div>

            <Image src={Gyst} className='work-gystimg' rounded/>

        </div>


<div className='spacer'></div>

     <div className='work-cont' style={{flexDirection:'row'}}>
            <div className='work-name'>
                <h3 className='work-title'>Raccoons Game</h3>
                <h4 className='work-subtitle'>Vanilla Javascript</h4>
                <br/>
                <Link to='/work/raccoons'><h4 className='seemore'>See More</h4></Link>
            </div>

            <Image src={Racc} className='work-raccimg' rounded/>
        </div>

        <div className='spacer'></div>
        <div className='spacer'></div>
      
        </div>
  )
}

export default Work