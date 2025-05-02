import React from 'react';
import cmngSoon from '../assets/bw1.jpg'
import { useState } from 'react';
import { useDrag } from '@use-gesture/react';

function ImgCntnr() {
  const [imgPos, setImgPos] = useState({x: 500 , y: 500})
  const bindImgPos = useDrag((params) => {
    setImgPos({
        x: params.offset[0],
        y: params.offset[1],
    })
  });
  return (
    <div {...bindImgPos()} className='container' style={{
        top: imgPos.y,
        left: imgPos.x,
    }}>
        <img className='boi' src={cmngSoon} alt="the man himself"/>
    </div>
  );
}

export default ImgCntnr;