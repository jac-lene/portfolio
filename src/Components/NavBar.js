import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <nav>
            <div className='link-cont'>
              <Link to='/'><h5>home</h5></Link>
              <Link to='/work'><h5>work</h5></Link>
              <Link to='/about'><h5>about</h5></Link>
              <Link to='/contact'><h5>contact</h5></Link>
            </div>
        </nav>
    </div>
  )
}

export default NavBar