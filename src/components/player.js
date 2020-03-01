import React from "react";
import PlayerImage from "../resources/player.png";
import PropTypes from "prop-types";
import "./player.scss";

const IMAGE_SIZE = 100;

export const Player = props => (
  <div className="player">
    <img
      src={PlayerImage}
      width={IMAGE_SIZE}
      height={IMAGE_SIZE}
      className={`player--rotate--${props.degree}`}
    />
  </div>
);

Player.propTypes = {
  degree: PropTypes.number
};

Player.defaultProps = {
  degree: 0
};
