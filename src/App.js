import "./App.css";
import { Main } from "./Components/Main";
import { Navbar } from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <div id="navbar">
      <Navbar />
      </div>
      <div id="main">
        <Main />
      </div>
    </div>
  );
}

export default App;
