import logo from "./logo.svg";
import "./App.css";
import Explorer from "./Components/Explorer";
import { useState } from "react";
import explorerData from "./Data/Data";
import Homepage from "./Pages/Homepage";

function App() {
  const [explorer, setExplorerData] = useState(explorerData);
  console.log("main", explorer);
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
      <Homepage explorer={explorer} />
      {/*<Explorer explorer={explorer} />*/}
    </div>
  );
}

export default App;
