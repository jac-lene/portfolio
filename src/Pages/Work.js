import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

import Sock from '../Images/Work/sock.png'

function Work() {
  return (
    <div className='center'>

            <div className='spacer'></div>
            {/* <div className='spacer'></div> */}

        <div className='work-cont'>
            <div className='work-name'>
                <h3 className='work-title'>SockLab Customizer</h3>
                <h4 className='work-subtitle'>React and Django</h4>
                <br/>
                <Link to='/work/socklab'><h4>See More</h4></Link>
            </div>

            <Image src={Sock} className='work-sockimg' rounded fluid/>
        </div>

<div className='spacer'></div>

     <div className='work-cont'>
            <div className='work-name'>
                <h3 className='work-title'>Aligned</h3>
                <h4 className='work-subtitle'>React and Django</h4>
                <br/>
                <button>See More</button>
            </div>

            <div className='work-img'>

            </div>
        </div>

<div className='spacer'></div>

     <div className='work-cont'>
            <div className='work-name'>
                <h3 className='work-title'>Gyst</h3>
                <h4 className='work-subtitle'>Express and MongoDB</h4>
                <br/>
                <button>See More</button>
            </div>

            <div className='work-img'>

            </div>
        </div>


<div className='spacer'></div>

     <div className='work-cont'>
            <div className='work-name'>
                <h3 className='work-title'>Raccoons</h3>
                <h4 className='work-subtitle'>Vanilla Javascript</h4>
                <br/>
                <Link to='/work/socklab'><h4>See More</h4></Link>
            </div>

            <div className='work-img'>

            </div>
        </div>

        <div className='spacer'></div>
        <div className='spacer'></div>
      
        </div>
  )
}

export default Work