import React, { useState, useEffect } from "react";

function Parent({ colsResult, rowsResult, colsGap, rowsGap }) {
  const [result, setResult] = useState([]);
  let cols = "";
  let rows = "";

  const handleResult = () => {
    for (let index in colsResult) {
      cols += `${
        colsResult[index][1] === 1
          ? colsResult[index][0]
          : `repeat(${colsResult[index][0]}, ${colsResult[index][1]}) `
      }`;
    }

    for (let index in rowsResult) {
      rows += `${
        rowsResult[index][1] === 1
          ? rowsResult[index][0]
          : `repeat(${rowsResult[index][0]}, ${rowsResult[index][1]}) `
      }`;
    }
    setResult([cols, rows]);
  };

  useEffect(() => {
    setTimeout(() => handleResult(), 20);
  }, [colsResult, rowsResult]);

  return (
    <div className="parent">
      <span className="text-[1.4rem] text-[#e4f567] font-bold tracking-wide">
        .parent{" "}
      </span>
      {`{`}
      <div className="pl-[1rem]">
        <div>
          <span className="text-[#6ef587] text-[1.1rem] font-bold tracking-wide">
            display:
          </span>{" "}
          grid;
        </div>
        <div>
          <span className="text-[#6ef587] text-[1.1rem] font-bold tracking-wide">
            grid-template-columns:
          </span>{" "}
          {`${result[0]}`};
        </div>
        <div>
          <span className="text-[#6ef587] text-[1.1rem] font-bold tracking-wide">
            grid-template-rows:
          </span>{" "}
          {`${result[1]}`};
        </div>
        <div>
          <span className="text-[#6ef587] text-[1.1rem] font-bold tracking-wide">
            grid-column-gap:
          </span>{" "}
          {`${colsGap}`}px;
        </div>
        <div>
          <span className="text-[#6ef587] text-[1.1rem] font-bold tracking-wide">
            grid-row-gap:
          </span>{" "}
          {`${rowsGap}`}
          px;
        </div>
      </div>
      {`}`}
    </div>
  );
}

export default Parent;
