import React, { useState } from "react";
import "./styles.scss";

const signalConfig = [
  { next: "yellow", duration: 4000 },
  { next: "red", duration: 1000 },
  { next: "green", duration: 3000 },
];

const App = () => {
  const [signal, setSignal] = useState("green");
  const [position, setPosition] = useState(0);

  setTimeout(() => {
    setSignal(signalConfig[position].next);
    setPosition((position + 1) % 3);
  }, signalConfig[position].duration);

  return (
    <div className="mainpost">
     


      <h1 style = {{color:signal}}
      >Traffic Signal Challenge</h1>
      <div className="verticalpost">
        <div
          className="box signal3"
          style={{ backgroundColor: signal === "red" ? signal : "transparent" }}
        >
          Stop
        </div>
        <div
          className="box signal2"
          style={{
            backgroundColor: signal === "yellow" ? signal : "transparent",
          }}
        >
          <small>SlowDown</small>
        </div>
        <div
          className="box signal1"
          style={{
            backgroundColor: signal === "green" ? signal : "transparent",
          }}
        >
          Go
        </div>
      </div>
      <div className="horizontalpost">
        <div
          className="box signal3"
          style={{ backgroundColor: signal === "red" ? signal : "transparent" }}
        >
          Stop
        </div>
        <div
          className="box signal2"
          style={{
            backgroundColor: signal === "yellow" ? signal : "transparent",
          }}
        >
          <small>SlowDown</small>
        </div>
        <div
          className="box signal1"
          style={{
            backgroundColor: signal === "green" ? signal : "transparent",
          }}
        >
          Go
        </div>
      </div>
    </div>
  );
};

export default App;
