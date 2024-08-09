import React from "react";

const Movement = ({ moveFwd, turnNorth, turnEast, turnSouth, turnWest }) => {
  return (
    <div className="moveAndTurn">
      <button className="directionBtn fwdBtn" onClick={moveFwd}>
        Move Forward
      </button>

      <div className="moveAndTurn turnBtns">
        <button className="directionBtn" onClick={turnNorth}>
          North
        </button>
        Click button to turn North or N on keyboard
        <button className="directionBtn" onClick={turnSouth}>
          South
        </button>
        Click button to turn South or S on keyboard
        <button className="directionBtn" onClick={turnEast}>
          East
        </button>
        Click button to turn East or E on keyboard
        <button className="directionBtn" onClick={turnWest}>
          West
        </button>
        Click button to turn West or W on keyboard
      </div>
    </div>
  );
};

export default Movement;
