import React, { useContext } from "react";
import { rowsContext, colContext, divContext } from "../Context/Context";

function GridGenerator() {
  const { rowsMount } = useContext(rowsContext);
  const { colsMount } = useContext(colContext);
  const { newDiv, setNewDev } = useContext(divContext);

  const column = colsMount.kind;
  const row = rowsMount.kind;
  const arr = Array(rowsMount.kind.length * colsMount.kind.length).fill(1);
  let isDown = false;
  let down = [];

  const handleDown = (e) => {
    if (!isDown) {
      down = [e.target.dataset.col, e.target.dataset.row];
    }
    isDown = true;
  };

  const handleUp = (e) => {
    setNewDev([
      ...newDiv,
      {
        down,
        up: [e.target.dataset.col, e.target.dataset.row],
      },
    ]);
    isDown = false;
  };

  return (
    <div
      className="grid-generator grid h-full text-white bg-[#3f3f3f] border-[2px] border-[#ededed]"
      style={{
        gridTemplateColumns: `${column.join(" ")}`,
        gridTemplateRows: `${row.join(" ")}`,
        gridRowGap: `${+rowsMount.gap}px`,
        gridColumnGap: `${+colsMount.gap}px`,
      }}
    >
      {arr.map((ele, index) => (
        <div
          key={new Date() * Math.random()}
          id={index + 1}
          data-row={Math.ceil((index + 1) / rowsMount.kind.length)}
          data-col={Math.ceil((index + 1) % colsMount.kind.length)}
          className="border-[1px] border-[#cbcbcb] border-dotted"
          onMouseDown={handleDown}
          onMouseUp={handleUp}
          role="button"
        />
      ))}
    </div>
  );
}

export default GridGenerator;
