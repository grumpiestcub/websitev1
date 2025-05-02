import React, { useState, useRef, useEffect } from 'react';
import cmngSoon from '../assets/bw1.jpg'

function DragDrop() {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 500, y: 500 });
  const dragItem = useRef(null);

  const handleMouseDown = (e) => {
    dragItem.current = e.target;
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    dragItem.current = null;
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className='container'
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        padding: '10px',
        cursor: 'grab',
      }}
      onMouseDown={handleMouseDown}
    >
        <img className='boi' src={cmngSoon} alt="the man himself"/>
        move me
    </div>
  );
}

export default DragDrop;