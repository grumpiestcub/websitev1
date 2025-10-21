import { useState, useRef } from "react";
import TypeWriter from "typewriter-effect";
import "../css/App.css";

function Soon() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const startPos = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef(0);

  const handlePointerDown = (e) => {
    // Only handle primary pointer (left mouse button or first touch)
    if (!e.isPrimary) return;

    e.preventDefault();
    e.stopPropagation();

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Pointer capture may fail on some devices, continue anyway
    }

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
      className="soonContainer"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: isDragging ? "grabbing" : "grab",
      }}
    >
      <pre>
        <TypeWriter
          options={{
            strings: [
              `╔══════════════════════════════╗
║ TERMINAL v0.9.6 // ACTIVE    ║
╠══════════════════════════════╣
║    ░▒▓█► CRYPTEX ◄█▓▒░       ║
║    >> ZONES: 1-9-0           ║
║    >> HEX: 0xA████           ║
║      [████████░] 90%         ║
║     user: are you real?      ║
║     terminal: are you?       ║
║     ▓▓▓ ║░░░░░░░║ ▓▓▓        ║
╚══════════════════════════════╝
`,
            ],
            autoStart: true,
            loop: true,
            delay: 20,
            pauseFor: 2500,
          }}
        />
      </pre>
    </div>
  );
}

export default Soon;
