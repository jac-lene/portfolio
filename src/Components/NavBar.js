import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='center'>
        <nav>
            <div className='link-cont'>
              <Link to='/'><div><h5>home</h5></div></Link>
              <Link to='/work'><div><h5>work</h5></div></Link>
              <div><h5>about</h5></div>
              <div><h5>contact</h5></div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar