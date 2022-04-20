import React, { useContext } from "react";
import "../assets/style/grid.css";
import Values from "./Values";
import GridGenerator from "./GridGenerator";
import { rowsContext, colContext } from "../Context/Context";

function Grid() {
  const { rowsMount, setRowsMount } = useContext(rowsContext);
  const { colsMount, setColsMount } = useContext(colContext);

  return (
    <section className="grid-container relative w-[80%] h-[90%]">
      <Values
        typeStr="column"
        type={colsMount}
        setType={setColsMount}
        cssStyle="absolute top-[-6%] z-1 w-full grid"
      />
      <GridGenerator />
      <Values
        typeStr="row"
        type={rowsMount}
        setType={setRowsMount}
        cssStyle="absolute top-0 left-[-7%] z-1 h-full w-[5rem] grid"
      />
    </section>
  );
}

export default Grid;
