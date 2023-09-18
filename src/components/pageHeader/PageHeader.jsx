import reactLogo from "./../../assets/react-logo.png";
function PageHeader() {
  return (
    <header>
      <nav className="nav">
        <img className="nav-logo" src={reactLogo} />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default PageHeader;
