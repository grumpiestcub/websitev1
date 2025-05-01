import '/Users/grumpiestcub/Desktop/code/websitev1/src/css/progress.css'
import React, { useEffect, useState } from 'react';

const Progress = ({
  size = '2rem',
  length = 10,
  speed = 100,
  stagger = 50, // delay between each character's animation step
}) => {
  const frames = ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷'];
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % frames.length);
    }, speed);
    return () => clearInterval(interval);
  }, [speed]);

  const resolvedSize = typeof size === 'number' ? `${size}px` : size;

  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length }).map((_, i) => {
        const offsetIndex = (frameIndex + Math.floor(i * stagger / speed)) % frames.length;
        return (
          <span
            key={i}
            style={{
              fontFamily: 'monospace',
              fontSize: resolvedSize,
              lineHeight: 1,
            }}
          >
            {frames[offsetIndex]}
          </span>
        );
      })}
    </div>
  );
};


export default Progress;