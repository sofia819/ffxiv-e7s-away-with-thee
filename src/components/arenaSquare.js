import React from "react";
import { TeleportPath } from "./teleportPath";
import "./arenaSquare.scss";
import PropTypes from "prop-types";
import { RIGHT, LEFT, FRONT, BACK } from "../constants";

// Where the player square is located
const PLAYER_ROW = 2;
const PLAYER_COLUMN = 2;

/**
 * An arena square that makes up an entire arena
 */
export const ArenaSquare = props => {
  const isBack = PLAYER_ROW + 1 === props.row && PLAYER_COLUMN === props.column;
  const isFront =
    PLAYER_ROW - 1 === props.row && PLAYER_COLUMN === props.column;
  const isLeft = PLAYER_ROW === props.row && PLAYER_COLUMN - 1 === props.column;
  const isRight =
    PLAYER_ROW === props.row && PLAYER_COLUMN + 1 === props.column;

  const shouldShowPath = () => {
    switch (props.teleportDirection) {
      case RIGHT:
        return isRight;
      case LEFT:
        return isLeft;
      case BACK:
        return isBack;
      case FRONT:
        return isFront;
      default:
        return false;
    }
  };

  return (
    <div className="arenaSquare">
      {shouldShowPath() && <TeleportPath shouldRotate={isFront || isBack} />}
    </div>
  );
};

ArenaSquare.propTypes = {
  orientation: PropTypes.string,
  shouldRotate: PropTypes.bool,
  teleportDirection: PropTypes.string
};

ArenaSquare.defaultProps = {
  orientation: FRONT,
  shouldRotate: false,
  teleportDirection: FRONT
};
