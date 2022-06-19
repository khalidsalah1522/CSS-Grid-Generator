import React, { useContext } from "react";

// components
import InputTheValue from "../InputTheValue";

// Context
import { colsContext } from "../../Context/Context";

function colUnits() {
  const { cols, setCols } = useContext(colsContext);

  return (
    <div
      className="absolute lg:top-[-8%] xl:top-[-7%] 2xl:top-[-6%] z-1 w-full grid"
      style={{
        gridTemplateColumns: `${cols.value.join(" ")}`,
        gridColumnGap: `${+cols.gap}px`,
      }}
    >
      {cols.value.map((unit, index) => (
        <InputTheValue
          unit={unit}
          key={index}
          type="col"
          index={index}
          fun={cols}
          setFun={setCols}
        />
      ))}
    </div>
  );
}

export default colUnits;
