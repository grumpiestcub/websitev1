import "../css/App.css";
import { useSpring, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";

function Soon() {
  const soonPos = useSpring({ x: 0, y: 0 });
  const bindSoonPos = useDrag((params) => {
    soonPos.x.set(params.offset[0]);
    soonPos.y.set(params.offset[1]);
  });
  return (
    <animated.div
      {...bindSoonPos()}
      className="soonContainer"
      style={{
        y: soonPos.y,
        x: soonPos.x,
      }}
    >
      coming soon
    </animated.div>
  );
}

export default Soon;
