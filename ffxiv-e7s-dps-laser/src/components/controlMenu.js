import React from "react";
import "./controlMenu.scss"

export const ControlMenu = props => (
  <div className="controlMenu">
    <button className="controlMenu--button" type="button" onClick={props.handleChangeTeleportDirection}>
      Change teleport direction: {props.teleportDirection}
    </button>
    <button className="controlMenu--button" type="button" onClick={props.handleChangePlayerOrientation}>
      Change player orientation: {props.playerOrientation}
    </button>
  </div>
);
