import React from 'react'
import { Link } from 'react-router-dom'

import github from '../Images/icons/github.png'
import linked from '../Images/icons/linked.png'

function NavBar() {
  return (
    <div>
       <div className='nav-shadow'></div>
        <nav>
          <div className='nav-flex'>
            <div className='navlink-cont'>
              <Link to='/'><h5 className='nav-link'>home</h5></Link>
              <Link to='/work'><h5 className='nav-link'>work</h5></Link>
              <Link to='/about'><h5 className='nav-link'>about</h5></Link>
              <Link to='/contact'><h5 className='nav-link'>contact</h5></Link>
            </div>
            <div className='social-cont'>
            <a href='https://github.com/jac-lene' target="_blank" rel="noreferrer noopener"><img src={github} alt='github' className='social'/></a>
              <a href='https://www.linkedin.com/in/jac-lene/' target="_blank" rel="noreferrer noopener"><img src={linked} alt='linkedin' className='social'/></a>
            </div>
            </div>

          
          
        </nav>
        </div>
  )
}

export default NavBar