import React, { useContext } from "react";
import "../assets/style/grid.css";
import Values from "./Values";
import GridGenerator from "./GridGenerator";
import NewDivs from "./NewDivs";
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
        cssStyle="absolute lg:top-[-8%] xl:top-[-7%] 2xl:top-[-6%] z-1 w-full grid"
      />
      <NewDivs />
      <GridGenerator />
      <Values
        typeStr="row"
        type={rowsMount}
        setType={setRowsMount}
        cssStyle="absolute lg:left-[-15%] xl:left-[-12%] top-0 2xl:left-[-7%] z-1 h-full w-[5rem] grid"
      />
    </section>
  );
}

export default Grid;
