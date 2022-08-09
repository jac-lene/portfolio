import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <nav>
            <div className='link-cont'>
              <Link to='/'><h5 className='nav-link'>home</h5></Link>
              <Link to='/work'><h5 className='nav-link'>work</h5></Link>
              <Link to='/about'><h5 className='nav-link'>about</h5></Link>
              <Link to='/contact'><h5 className='nav-link'>contact</h5></Link>
            </div>
        </nav>
    </div>
  )
}

export default NavBar