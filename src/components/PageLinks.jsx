import "../css/App.css";

function PageLinks() {
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  const isAbout = currentPath.includes("about");
  const isMusic = currentPath.includes("music");
  const isHome = currentPath.includes("home");

  return (
    <div className="pageLinks">
      <a href="index.html">home{isHome && "(you're here)"}</a>
      //
      <a href="music.html">music{isMusic && "(you're here)"}</a>
      //
      <a href="about.html">about{isAbout && "(you're here)"}</a>
      //
    </div>
  );
}

export default PageLinks;
