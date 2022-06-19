import React, { useContext } from "react";
import { rowsContext, colsContext, newDivContext } from "../../Context/Context";

function Generator() {
  const { cols } = useContext(colsContext);
  const { rows } = useContext(rowsContext);
  const { newDiv, setNewDiv } = useContext(newDivContext);

  const rowCol = Array(cols.value.length * rows.value.length).fill(1);
  let isDown = false;
  let coordinate = {};

  const handleMouseDown = (e) => {
    const target = e.target;
    coordinate.down = [
      +target.dataset.col === 0 ? cols.value.length : +target.dataset.col,
      +target.dataset.row,
    ];
    isDown = true;
  };

  const handleMouseUp = (e) => {
    const target = e.target;
    coordinate.up = [
      +target.dataset.col === 0 ? cols.value.length : +target.dataset.col,
      +target.dataset.row,
    ];

    if (isDown) {
      const { down, up } = coordinate;
      const x1 = down[1] >= up[1] ? up[1] : down[1];
      const x2 = up[1] >= down[1] ? up[1] + 1 : down[1] + 1;
      const y1 = down[0] >= up[0] ? up[0] : down[0];
      const y2 = up[0] >= +down[0] ? +up[0] + 1 : +down[0] + 1;
      setNewDiv([...newDiv, `${x1} / ${y1} / ${x2} / ${y2}`]);
      isDown = false;
    }
  };

  return (
    <section
      className="grid-generator z-10 absolute top-0 left-0 grid h-full w-full text-white bg-[#3f3f3f2b] border-[2px] border-[#ededed]"
      style={{
        gridTemplateColumns: `${cols.value.join(" ")}`,
        gridTemplateRows: `${rows.value.join(" ")}`,
        gridColumnGap: `${cols.gap}px`,
        gridRowGap: `${rows.gap}px`,
      }}
    >
      {rowCol.map((ele, i) => (
        <div
          key={i}
          className="border-[1px] border-[#cbcbcb] border-dotted"
          data-row={Math.ceil((i + 1) / cols.value.length)}
          data-col={Math.ceil((i + 1) % cols.value.length)}
          onMouseDown={(e) => handleMouseDown(e)}
          onMouseUp={(e) => handleMouseUp(e)}
        />
      ))}
    </section>
  );
}

export default Generator;
