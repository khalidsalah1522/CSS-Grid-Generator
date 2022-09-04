import React, { useContext, useEffect } from "react";

// Context
import { rowsContext, colsContext, newDivContext } from "../Context/Context";

// Components
import Child from "./Results/Child";
import Parent from "./Results/Parent";

function ShowResult({ setShowResult }) {
  const { cols } = useContext(colsContext);
  const { rows } = useContext(rowsContext);
  const { newDiv } = useContext(newDivContext);
  const colsResult = {};
  const rowsResult = {};
  let number = 1;

  useEffect(() => {
    for (let i = 0; i < cols.value.length - 1; i++) {
      if (cols.value[i] == cols.value[i + 1]) {
        colsResult[cols.value[i]] = [cols.value[i], (number = number + 1)];
      } else {
        colsResult[cols.value[i]] = [cols.value[i], 1];
      }
    }
    number = 1;
    for (let i = 0; i < rows.value.length - 1; i++) {
      if (cols.value[i] == cols.value[i + 1]) {
        rowsResult[cols.value[i]] = [cols.value[i], (number = number + 1)];
      } else {
        rowsResult[cols.value[i]] = [cols.value[i], 1];
      }
    }
  }, []);

  return (
    <div className="results z-[100] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full bg-[#292929b2] flex items-center justify-center">
      <div className="result-container relative w-[45%] p-[1rem] h-[70%] bg-[#222] text-[#f4f2f2] z-10 overflow-y-scroll">
        <Parent
          colsResult={colsResult}
          rowsResult={rowsResult}
          colsGap={cols.gap}
          rowsGap={rows.gap}
        />
        <div className="children mt-[1rem]">
          {newDiv.map((div, index) => {
            return <Child value={div} key={index} index={index} />;
          })}
        </div>
        <button
          type="button"
          className="absolute text-[1.5rem] font-bold top-[5px] right-[10px]"
          onClick={() => setShowResult(false)}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default ShowResult;
