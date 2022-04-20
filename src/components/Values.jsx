import React from "react";
import InputValue from "./InputValue";

function Values({ typeStr, type, setType, cssStyle }) {
  const value = type.kind;

  return (
    <div
      className={`${cssStyle}`}
      style={
        typeStr === "row"
          ? {
              gridTemplateRows: `${value.join(" ")}`,
              gridRowGap: `${+type.gap}px`,
            }
          : {
              gridTemplateColumns: `${value.join(" ")}`,
              gridColumnGap: `${+type.gap}px`,
            }
      }
    >
      {value.map((unit, index) => (
        <InputValue
          unit={unit}
          index={index}
          key={unit + index}
          type={type}
          typeStr={typeStr}
          setType={setType}
        />
      ))}
    </div>
  );
}

export default Values;
