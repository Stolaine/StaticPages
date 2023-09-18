import reactLogo from "./assets/react-logo.png";
import "./App.css";

function App() {
  return (
    <div>
      <img src={reactLogo} width="50px" />
      <h1>Fun facts about react</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally create by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

export default App;
