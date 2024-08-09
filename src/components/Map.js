import React from "react";
import "./style.css";

const Map = ({ brPosition, brDirection }) => {
  const grid = () => {
    const currRow = [];
    for (let x = 0; x < 4; x++) {
      const cells = [];
      for (let col = 0; col < 4; col++) {
        const brPresent = brPosition.x === col && brPosition.y === x;
        cells.push(
          <div key={`${x}-${col}`} className="cellLook">
            {brPresent ? <i className={`arrow ${brDirection}`}></i> : ""}
          </div>,
        );
      }
      currRow.push(
        <div key={x} className="rowLook">
          {cells}
        </div>,
      );
    }
    return currRow;
  };

  return <div className="grid">{grid()}</div>;
};

export default Map;
