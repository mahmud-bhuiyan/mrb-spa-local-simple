import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import SideCart from "./components/SideCart/SideCart";

function App() {
  const element = <FontAwesomeIcon icon={faCoffee} />;

  const [countWatchTime, setCountWatchTime] = useState("");

  const handleWatchTime = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));

    if (previousWatchTime) {
      const sum = previousWatchTime + time;
      localStorage.setItem("watchTime", sum);
      setCountWatchTime(sum);
    } else {
      localStorage.setItem("watchTime", time);
      setCountWatchTime(time);
    }
  };

  return (
    <div>
      <div className="header m-auto mb-3">
        <Header></Header>
      </div>
      <div className="main row">
        <div className="home-container col-md-8">
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>
        <div className="sideCart col-md-4 card">
          <SideCart countWatchTime={countWatchTime}></SideCart>
        </div>
      </div>
      <Contact></Contact>
    </div>
  );
}

export default App;
