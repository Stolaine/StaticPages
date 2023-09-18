import reactLogo from "./assets/react-logo.png";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <nav>
          <img src={reactLogo} width="50px" />
        </nav>
      </header>
      <h1>Fun facts about react</h1>
      <ol>
        <li>Was first released in 2013</li>
        <li>Was originally create by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ol>
      <footer>
        {" "}
        <small>© 2023 Stolaine development. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;
