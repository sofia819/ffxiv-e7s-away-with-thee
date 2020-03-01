import React from "react";
import { ArenaSquare } from "./arenaSquare";
import { Player } from "./player";

/**
 * A 3x3 grid representing the area around the player
 */
export const Arena = props => {
  const { teleportDirection, degreeTurned } = props;
  return (
    <>
      <ArenaSquare
        shouldShow={false}
        row={1}
        column={1}
        teleportDirection={teleportDirection}
      />
      <ArenaSquare row={1} column={2} teleportDirection={teleportDirection} />
      <ArenaSquare
        shouldShow={false}
        row={1}
        column={3}
        teleportDirection={teleportDirection}
      />
      <ArenaSquare row={2} column={1} teleportDirection={teleportDirection} />
      <Player degree={degreeTurned} />
      <ArenaSquare row={2} column={3} teleportDirection={teleportDirection} />
      <ArenaSquare
        shouldShow={false}
        row={3}
        column={1}
        teleportDirection={teleportDirection}
      />
      <ArenaSquare row={3} column={2} teleportDirection={teleportDirection} />
      <ArenaSquare
        shouldShow={false}
        row={3}
        column={3}
        teleportDirection={teleportDirection}
      />
    </>
  );
};
