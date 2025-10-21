import { useState, useRef } from "react";
import "../css/App.css";

function SoundInfo() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const startPos = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef(0);

  const handlePointerDown = (e) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
    };
    startPos.current = { ...position };
  };

  const updatePosition = (e) => {
    setPosition({
      x: startPos.current.x + (e.clientX - dragStart.current.x),
      y: startPos.current.y + (e.clientY - dragStart.current.y),
    });
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    if (animationIdRef.current) return;
    animationIdRef.current = requestAnimationFrame(() => {
      animationIdRef.current = 0;
      updatePosition(e);
    });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
      animationIdRef.current = 0;
    }
  };
  return (
    <div
      className="soundContainer"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: isDragging ? "grabbing" : "grab",
      }}
    >
      <a href="https://soundcloud.com/grumpiestcub" target="_blank">
        soundcloud
      </a>
    </div>
  );
}

export default SoundInfo;
