import React, { useContext } from "react";
import { colsContext, rowsContext } from "../Context/Context";

function Filed({ type }) {
  const { rows, setRows } = useContext(rowsContext);
  const { cols, setCols } = useContext(colsContext);
  const current = type === "col" ? cols : rows;

  const handleValue = (e, i) => {
    if (e.key === "Enter") {
      if (type === "row") {
        rows.value[i] = e.target.value;
        setRows({ ...rows });
      } else {
        cols.value[i] = e.target.value;
        setCols({ ...cols });
      }
    }
  };

  const handleBlur = (e, i) => {
    if (type === "row") {
      rows.value[i] = e.target.value ? e.target.value : "1fr";
      setRows({ ...rows });
    } else {
      cols.value[i] = e.target.value ? e.target.value : "1fr";
      setCols({ ...cols });
    }
  };

  return (
    <div
      className={
        type === "row"
          ? "absolute lg:left-[-15%] xl:left-[-12%] top-0 2xl:left-[-7%] z-1 h-full w-[5rem] grid"
          : "absolute lg:top-[-8%] xl:top-[-7%] 2xl:top-[-6%] z-1 w-full grid"
      }
      style={
        type === "row"
          ? {
              gridTemplateRows: `${current.value.join(" ")}`,
              gridRowGap: `${+current.gap}px`,
            }
          : {
              gridTemplateColumns: `${current.value.join(" ")}`,
              gridColumnGap: `${+current.gap}px`,
            }
      }
    >
      {current.value.map((unit, i) => {
        return (
          <div
            key={i}
            className="flex items-center justify-center"
            style={
              type === "row"
                ? { gridArea: `${i + 1} / 1 /  ${i + 2} / 2` }
                : { gridArea: `1 / ${i + 1} / 2 / ${i + 2}` }
            }
          >
            <input
              type="text"
              id={`${i + 1}`}
              className="outline-none z-2 text-[#fff] font-bold p-[0.1rem] w-[3rem] bg-[#494949] placeholder:text-[#fff]"
              onBlur={(e) => handleBlur(e, i)}
              onKeyDown={(e) => handleValue(e, i)}
              placeholder={unit}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Filed;
