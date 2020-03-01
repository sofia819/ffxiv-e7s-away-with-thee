import React from "react";
import PlayerImage from "../resources/player.png";
import PropTypes from "prop-types";
import "./player.scss";

const IMAGE_SIZE = 100;

/**
 * Represents a player in the arena with an arrow as an image of the player 
 */
export const Player = props => (
  <div className="player">
    <img
      src={PlayerImage}
      width={IMAGE_SIZE}
      height={IMAGE_SIZE}
      className={`player--rotate--${props.degree}`}
      alt="an arrow to indicate the character orientation"
    />
  </div>
);

Player.propTypes = {
  degree: PropTypes.number
};

Player.defaultProps = {
  degree: 0
};
