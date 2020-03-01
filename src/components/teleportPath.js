import React from "react";
import PropTypes from "prop-types";
import "./teleportPath.scss";

export const TeleportPath = props => (
  <div
    style={{
      background: "#000000",
      width: `${props.width}px`,
      height: `${props.height}px`,
    }}
    className={`teleportPath--${props.shouldRotate ? "rotate" : ""}`}
  />
);

TeleportPath.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  shouldRotate: PropTypes.bool,
};

TeleportPath.defaultProps = {
  width: 160,
  height: 20,
  shouldRotate: false,
};
