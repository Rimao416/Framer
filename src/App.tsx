import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Fade from "./Fade";
import Slide from "./Slide";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="App">
      <header>
        <h1 className="fake-logo">Level Up</h1>
      </header>
      <main className="layout">
        <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
        <Fade isActive={isToggled}>
          {isToggled && (
            <div className="card">
              <h4>Post Number one</h4>
              <p>this is inside the card</p>
            </div>
          )}
        </Fade>
        <Slide direction={-1} isActive={isToggled}>
          {isToggled && (
            <div className="card">
              <h4>Post Number one</h4>
              <p>this is inside the card</p>
            </div>
          )}
        </Slide>
        <Slide direction={1} distance={600} isActive={isToggled}>
          {isToggled && (
            <div className="card">
              <h4>Post Number one</h4>
              <p>this is inside the card</p>
            </div>
          )}
        </Slide>

      </main>
    </div>
  );
}

export default App;
