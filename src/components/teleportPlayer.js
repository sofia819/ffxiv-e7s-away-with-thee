import React, { useState } from "react";
import PropTypes from "prop-types";
import { RIGHT, LEFT, FRONT, BACK } from "../constants";
import { ControlMenu } from "./controlMenu";
import "./teleportPlayer.scss";
import { Arena } from "./arena";

const getDegree = orientation => {
  switch (orientation) {
    case RIGHT:
      return 90;
    case LEFT:
      return 270;
    case BACK:
      return 180;
    default:
      return 0;
  }
};

/**
 * An arena with the controls to change player orientation and teleport direction
 */
export const TeleportPlayer = () => {
  // Tells us which direction the player is going to be teleported to
  const [teleportDirection, setTeleportDirection] = useState("front");

  // Tells us which direction the player is facing
  const [playerOrientation, setPlayerOrientation] = useState("front");

  const degreeTurned = getDegree(playerOrientation);
  const directions = [FRONT, RIGHT, BACK, LEFT];

  const onChangeTeleportDirection = () => {
    const index = directions.indexOf(teleportDirection);
    index + 1 >= directions.length
      ? setTeleportDirection(directions[0])
      : setTeleportDirection(directions[index + 1]);
  };

  const onChangeOrientation = () => {
    const index = directions.indexOf(playerOrientation);
    index + 1 >= directions.length
      ? setPlayerOrientation(directions[0])
      : setPlayerOrientation(directions[index + 1]);
  };

  return (
    <div className="arena">
      <ControlMenu
        playerOrientation={playerOrientation}
        handleChangePlayerOrientation={onChangeOrientation}
        teleportDirection={teleportDirection}
        handleChangeTeleportDirection={onChangeTeleportDirection}
      />
      <div className={`arena--${degreeTurned}`}>
        <div className={`grid-container`}>
          <Arena
            teleportDirection={teleportDirection}
            degreeTurned={degreeTurned}
          />
        </div>
      </div>
    </div>
  );
};

TeleportPlayer.propTypes = {
  orientation: PropTypes.string,
  teleportDirection: PropTypes.string
};

TeleportPlayer.defaultProps = {
  orientation: FRONT,
  teleportDirection: FRONT
};
