import React from "react";
import { ArenaSquare } from "./arenaSquare.js";

// For reference
const COL_NUM = 4;
const ROW_NUM = 4;

export const ArenaRow = props => {
  return (
    <>
      <ArenaSquare row={props.row} column={1} />
      <ArenaSquare row={props.row} column={2} />
      <ArenaSquare row={props.row} column={3} />
      <ArenaSquare row={props.row} column={4} />
    </>
  );
};

export const Arena = props => (
  <>
    <ArenaRow row={1} />
    <ArenaRow row={2} />
    <ArenaRow row={3} />
    <ArenaRow row={4} />
  </>
);
