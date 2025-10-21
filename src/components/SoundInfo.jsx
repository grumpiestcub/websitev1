import { useState, useRef } from "react";
import "../css/App.css";

function SoundInfo() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const startPos = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef(0);
  const hasMoved = useRef(false);

  const handlePointerDown = (e) => {
    if (e.target.tagName === "A") return; // Don't prevent default on links
    if (!e.isPrimary) return; // Only handle primary pointer

    e.preventDefault();
    e.stopPropagation();

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Pointer capture may fail on some devices
    }

    setIsDragging(true);
    hasMoved.current = false;
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
    };
    startPos.current = { ...position };
  };

  const updatePosition = (e) => {
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;

    // Check if moved more than 5px (threshold for drag vs click)
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      hasMoved.current = true;
    }

    setPosition({
      x: startPos.current.x + dx,
      y: startPos.current.y + dy,
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

  const handlePointerUp = (e) => {
    setIsDragging(false);
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
      animationIdRef.current = 0;
    }

    // If we didn't move, allow the click to go through
    if (!hasMoved.current && e.target.tagName === "A") {
      e.target.click();
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
