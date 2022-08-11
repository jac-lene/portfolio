import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'

import Racc from '../Images/Work/raccoons/mockup.png'
import Gyst from '../Images/Work/gyst/mockup.png'
import Sock from '../Images/Work/sock.png'
import Align from '../Images/Work/align.png'



function CarouselComp() {

  return (
    <Carousel className='car-item' variant='dark'>
      <Carousel.Item >
        <Link to='/work/socklab'><div className='carousel'>
            <img
            className="d-block w-100"
            src={Sock}
            alt="First slide"
            style={{height:'100%', width:'auto', objectFit:'contain'}}
            />
        </div>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to='/work/align'><div className='carousel'> 
        <img
          className="d-block w-100"
          src={Align}
          alt="Second slide"
          style={{height:'100%', width:'auto', objectFit:'contain'}}
        />
        </div>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to='/work/gyst'><div className='carousel'> 
        <img
          className="d-block w-100"
          src={Gyst}
          alt="Third slide"
          style={{height:'100%', width:'auto', objectFit:'contain'}}
        />
        </div>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
      <Link to='/work/raccoons'><div className='carousel'>
        <img
          className="d-block w-100"
          src={Racc}
          alt="Fourth slide"
          style={{height:'100%', width:'auto', objectFit:'contain'}}
        />
        </div>
        </Link>
      </Carousel.Item>
    </Carousel>
  );
  
}

export default CarouselComp;