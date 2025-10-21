import "../css/App.css";
import { useSpring, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";

function PageLinks() {
  const linkPos = useSpring({ x: 0, y: 0 });
  const bindLinkPos = useDrag((params) => {
    linkPos.x.set(params.offset[0]);
    linkPos.y.set(params.offset[1]);
  });

  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  const isHome = currentPath === "/" || currentPath.includes("index");
  const isMusic = currentPath.includes("music");

  return (
    <animated.div
      {...bindLinkPos()}
      className="pageLinks"
      style={{
        y: linkPos.y,
        x: linkPos.x,
      }}
    >
      //
      <a href="index.html">home{isHome && "(you're here)"}</a>
      //
      <a href="music.html">music{isMusic && "(you're here)"}</a>
      //
    </animated.div>
  );
}

export default PageLinks;
