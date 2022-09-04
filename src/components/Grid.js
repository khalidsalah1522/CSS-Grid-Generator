import React from "react";

// Components
import Filed from "./Filed";
import Generator from "./Grid/Generator";
import Maingrid from "./Grid/Maingrid";

function Grid() {
  return (
    <section className="grid-container relative w-[80%] h-[90%]">
      <Filed type="cols" />
      <Maingrid />
      <Generator />
      <Filed type="row" />
    </section>
  );
}

export default Grid;
