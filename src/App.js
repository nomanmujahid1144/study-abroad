import React from "react";
import "./App.css";
import MainRoutes from "./routes";
import whatsapp from '../src/images/whatsapp.png';

import "./Components/fontawesomeIcons";

// import LandingPage from "./Screen/LandingPage";

function App() {
  return (
    <div className="App">
      <MainRoutes />
      <div className="whatsapp-floating">
        <a
          href="https://api.whatsapp.com/send?phone=919318325049"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsapp} alt="WhatsApp" />
          <span>Talk to us</span>
        </a>
      </div>
    </div>
  );
}

export default App;
