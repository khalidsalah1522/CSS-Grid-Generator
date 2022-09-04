import React, { useContext } from "react";

import { colsContext, rowsContext } from "../../Context/Context";

function Input({ label, gap, min, max, average }) {
  const { cols, setCols } = useContext(colsContext);
  const { rows, setRows } = useContext(rowsContext);

  const handleValue = (e) => {
    if (label === "columns") {
      if (cols.value.length < e.target.value) {
        setCols({ ...cols, value: [...cols.value, "1fr"] });
      } else {
        setCols({ ...cols, value: cols.value.slice(0, cols.value.length - 1) });
      }
    } else {
      if (rows.value.length < e.target.value) {
        setRows({ ...rows, value: [...rows.value, "1fr"] });
      } else {
        setRows({ ...rows, value: rows.value.slice(0, rows.value.length - 1) });
      }
    }
  };

  const handleGap = (e) => {
    if (label === "columns") {
      setCols({ ...cols, gap: e.target.value });
    } else {
      setRows({ ...rows, gap: e.target.value });
    }
  };

  return (
    <div className="flex gap-[5px] flex-col items-center font-NATS font-semibold tracking-wider text-[1.2rem]">
      <label htmlFor={gap ? `${label} gap` : label}>
        {gap ? `${label} gap` : label}
      </label>
      <input
        className="w-[3rem] h-[1.8rem] outline-none text-[#222] px-[0.2rem]"
        type="number"
        name={gap ? `${label} gap` : label}
        id={gap ? `${label} gap` : label}
        min={min}
        value={
          label === "columns"
            ? gap
              ? cols.gap
              : cols.value.length
            : gap
            ? rows.gap
            : rows.value.length
        }
        max={max}
        placeholder={average}
        onChange={(e) => (gap ? handleGap(e) : handleValue(e))}
      />
    </div>
  );
}

export default Input;
