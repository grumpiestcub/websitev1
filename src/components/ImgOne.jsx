import React from 'react';
import cmngSoon from '../assets/bw1.jpg'
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';

function ImgCntnrOne() {
  const imgPos = useSpring({x: -100 , y: -400})
  const bindImgPos = useDrag((params) => {
    imgPos.x.set(params.offset[0]);
    imgPos.y.set(params.offset[1])
  });
  return (
    <animated.div {...bindImgPos()} className='container' style={{
        y: imgPos.y,
        x: imgPos.x,
    }}>
        <img className='boi' src={cmngSoon} alt="the man himself"/>
    </animated.div>
  );
}

export default ImgCntnrOne;