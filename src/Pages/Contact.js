import React, { useState, useRef } from 'react'
import Overlay from 'react-bootstrap/Overlay';

import Resume from '../Images/Resume.pdf'

function Contact() {

  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const target = useRef(null);

  const text = 'jaclenesini@gmail.com'

  const copy = () => {
    navigator.clipboard.writeText(text)
    setCopied(!copied)
  }


  return (
    <div className='center'>
        <div className='spacer'></div>
        <div className='spacer'></div>
        <div className='spacer'></div>
        <div className='contact-cont'>
            <h1>Let's stay in touch.</h1>
            <h3>Check me out on <a href='https://github.com/jac-lene' target="_blank" rel="noreferrer noopener">Github</a> and <a href='https://www.linkedin.com/in/jac-lene/' target="_blank" rel="noreferrer noopener">LinkedIn</a>.</h3>
            <h3>Wanna see a resume? <a href={Resume} target="_blank" rel="noreferrer noopener">You got it.</a></h3>

                <br/>

            <h4>I'm currently seeking full time work and freelance opportunities.</h4>
            <h4>Send me a <div onClick={() => {setShow(!show); setCopied(false)}} className='message'>message</div>!</h4> 
            
            {show && <div> <h4><div className='message' ref={target} onClick={copy}>{text}</div> </h4> </div>}

            <Overlay target={target.current} show={copied} placement="right"> 
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: '#2C3131',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            Copied!
          </div>
        )}
      </Overlay>

        </div>
        </div>
  )
}

export default Contact