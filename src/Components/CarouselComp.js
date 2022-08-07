import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'

import Raccoon from '../Images/rac.png'
import Gyst from '../Images/gyst.png'
import Sock from '../Images/Work/sock.png'


function CarouselComp() {

  return (
    <Carousel variant='dark'>
      <Carousel.Item>
        <div className='carousel'>
            <img
            className="d-block w-100"
            src={Sock}
            alt="First slide"
            style={{height:'100%', width:'auto', objectFit:'contain'}}
            />
        </div>
       
      </Carousel.Item>
      <Carousel.Item>
        <div className='carousel'> 
        <img
          className="d-block w-100"
          src={Gyst}
          alt="Second slide"
          style={{height:'100%', width:'auto', objectFit:'contain'}}
        />
        </div>
       
      </Carousel.Item>
      <Carousel.Item>
      <div className='carousel'>
        <img
          className="d-block w-100"
          src={Raccoon}
          alt="Third slide"
          style={{height:'100%', width:'auto', objectFit:'contain'}}
        />
        </div>
      </Carousel.Item>
    </Carousel>
  );
  
}

export default CarouselComp;