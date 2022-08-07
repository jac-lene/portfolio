import React from 'react'
import Resume from '../Images/Resume.pdf'

function Contact() {
  return (
    <div className='center'>
        <div className='spacer'></div>
        <div className='spacer'></div>
        <div>
            <h1>Let's stay in touch.</h1>
            <h3>Check me out on <a href='https://github.com/jac-lene' target="_blank" rel="noreferrer noopener">Github</a> and <a href='https://www.linkedin.com/in/jac-lene/' target="_blank" rel="noreferrer noopener">LinkedIn</a>.</h3>
            <h3>Wanna see a resume? <a href={Resume} target="_blank" rel="noreferrer noopener">You got it.</a></h3>

                <br/>

            <h4>I'm currently seeking full time work and freelance opportunities.</h4>
            <h4>Send me a message!</h4>


        </div>
        
        </div>
  )
}

export default Contact