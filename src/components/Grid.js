import React from "react";

// Components
import ColUnits from "./Grid/ColUnits";
import RowUnits from "./Grid/RowUnits";
import Generator from "./Grid/Generator";
import Maingrid from "./Grid/Maingrid";

function Grid() {
  return (
    <section className="grid-container relative w-[80%] h-[90%]">
      <ColUnits />
      <Maingrid />
      <Generator />
      <RowUnits />
    </section>
  );
}

export default Grid;
