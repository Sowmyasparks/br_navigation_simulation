import "./App.css";
import Map from "./components/Map";
import Movement from "./components/Movement";
import React, { useEffect, useState } from "react";

function App() {
  const [currPosition, setCurrPosition] = useState({ x: 0, y: 0 });
  const [currDirection, setCurrDirection] = useState("east"); // North, South, East, West

  const moveFwd = () => {
    let { x, y } = currPosition;
    switch (currDirection) {
      case "north":
        y = Math.max(y - 1, 0);
        break;
      case "east":
        x = Math.min(x + 1, 3);
        break;
      case "south":
        y = Math.min(y + 1, 3);
        break;
      case "west":
        x = Math.max(x - 1, 0);
        break;
      default:
        break;
    }
    setCurrPosition({ x, y });
  };

  const turnNorth = () => {
    setCurrDirection("north");
  };

  const turnSouth = () => {
    setCurrDirection("south");
  };

  const turnWest = () => {
    setCurrDirection("west");
  };

  const turnEast = () => {
    setCurrDirection("east");
  };

  const handleKey = (e) => {
    let keyDirection = currDirection;
    switch (e.key) {
      case "n":
      case "N":
        keyDirection = "north";
        break;
      case "s":
      case "S":
        keyDirection = "south";
        break;
      case "e":
      case "E":
        keyDirection = "east";
        break;
      case "w":
      case "W":
        keyDirection = "west";
        break;
      default:
        break;
    }
    setCurrDirection(keyDirection);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div className="App">
      <Map brPosition={currPosition} brDirection={currDirection} />
      <Movement
        moveFwd={moveFwd}
        turnNorth={turnNorth}
        turnEast={turnEast}
        turnSouth={turnSouth}
        turnWest={turnWest}
      />
    </div>
  );
}

export default App;
