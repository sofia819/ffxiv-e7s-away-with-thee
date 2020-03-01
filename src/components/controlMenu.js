import React from "react";
import "./controlMenu.scss";

const DIRECTION_BUTTON_TEXT = "Change teleport direction: ";
const ORIENTATION_BUTTON_TEXT = "Change player orientation: ";

/**
 * Buttons that control player orientation and teleport direction
 */
export const ControlMenu = props => (
  <div className="controlMenu">
    <button
      className="controlMenu--button"
      type="button"
      onClick={props.handleChangeTeleportDirection}
    >
      {DIRECTION_BUTTON_TEXT} {props.teleportDirection}
    </button>
    <button
      className="controlMenu--button"
      type="button"
      onClick={props.handleChangePlayerOrientation}
    >
      {ORIENTATION_BUTTON_TEXT} {props.playerOrientation}
    </button>
  </div>
);
