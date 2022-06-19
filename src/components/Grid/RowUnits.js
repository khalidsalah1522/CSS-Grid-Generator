import React, { useContext } from "react";

// components
import InputTheValue from "../InputTheValue";

// Context
import { rowsContext } from "../../Context/Context";

function rowUnits() {
  const { rows, setRows } = useContext(rowsContext);

  return (
    <div
      className="absolute lg:left-[-15%] xl:left-[-12%] top-0 2xl:left-[-7%] z-1 h-full w-[5rem] grid"
      style={{
        gridTemplateRows: `${rows.value.join(" ")}`,
        gridRowGap: `${+rows.gap}px`,
      }}
    >
      {rows.value.map((unit, index) => (
        <InputTheValue
          unit={unit}
          key={index}
          type="row"
          index={index}
          fun={rows}
          setFun={setRows}
        />
      ))}
    </div>
  );
}

export default rowUnits;
