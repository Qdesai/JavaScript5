import React from 'react';
import { Carousel } from 'antd';
import im1 from "../Images/im1.jpg";
import im2 from "../Images/im2.jpg";
import im3 from "../Images/im3.jpg";
import im4 from "../Images/im4.jpg";

const contentStyle = {
  height: '300px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  imgposition: 'center',
  imgrepeat: 'no-repeat',
  imgsize: 'cover',
  margin: '0 auto',
};

const Caro = () => {

return(
    <>
    
    <Carousel autoplay>
    <div>
    <img src={im1} style={contentStyle} alt="no image" />  
    </div>
    <div>
    <img src={im2} style={contentStyle} alt="no image" />
    </div>
    <div>
    <img src={im3} style={contentStyle} alt="no image" />
    </div>
    <div>
    <img src={im4} style={contentStyle} alt="no image" />
    </div>
  </Carousel>
    </>
);
};
export default Caro;