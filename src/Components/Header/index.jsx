import "./Header.css";

function Header({text}) {
  return (
    <>
      <div className="all-pages-header-container">
        <h1 className="all-pages-header-heading">{text}</h1>
      </div>
    </>
  );
}

export default Header;
