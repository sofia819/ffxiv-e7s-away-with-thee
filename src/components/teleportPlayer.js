import React, { useState } from "react";
import PropTypes from "prop-types";
import { TeleportPath } from "./teleportPath";
import { RIGHT, LEFT, FRONT, BACK } from "../constants";
import { Player } from "./player";
import { ArenaSquare } from "./arenaSquare";
import { ControlMenu } from "./controlMenu";
import "./teleportPlayer.scss";

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

export const TeleportPlayer = () => {
  // Tells us which direction the player is going to be teleported to
  const [teleportDirection, setTeleportDirection] = useState("front");

  // Tells us which direction the player is facing
  const [playerOrientation, setPlayerOrientation] = useState("front");

  // Tells us which column tether the DPS is linked to.
  // col: 1 2 3 4
  const [tetherSource, setTetherSource] = useState(0);

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
          <ArenaSquare
            shouldShow={false}
            row={1}
            column={1}
            teleportDirection={teleportDirection}
          />
          <ArenaSquare
            row={1}
            column={2}
            teleportDirection={teleportDirection}
          />
          <ArenaSquare
            shouldShow={false}
            row={1}
            column={3}
            teleportDirection={teleportDirection}
          />
          <ArenaSquare
            row={2}
            column={1}
            teleportDirection={teleportDirection}
          />
          <Player degree={degreeTurned} />
          <ArenaSquare
            row={2}
            column={3}
            teleportDirection={teleportDirection}
          />
          <ArenaSquare
            shouldShow={false}
            row={3}
            column={1}
            teleportDirection={teleportDirection}
          />
          <ArenaSquare
            row={3}
            column={2}
            teleportDirection={teleportDirection}
          />
          <ArenaSquare
            shouldShow={false}
            row={3}
            column={3}
            teleportDirection={teleportDirection}
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
