import "../css/App.css";

function PageLinks() {
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  const isHome = currentPath === "/" || currentPath.includes("index");
  const isMusic = currentPath.includes("music");

  return (
    <div className="pageLinks">
      //
      <a href="index.html">home{isHome && "(you're here)"}</a>
      //
      <a href="music.html">music{isMusic && "(you're here)"}</a>
      //
    </div>
  );
}

export default PageLinks;
