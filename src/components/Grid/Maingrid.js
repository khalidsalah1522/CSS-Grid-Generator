import React, { useContext } from "react";
import { rowsContext, colsContext, newDivContext } from "../../Context/Context";

function Maingrid() {
  const { cols } = useContext(colsContext);
  const { rows } = useContext(rowsContext);
  const { newDiv, setNewDiv } = useContext(newDivContext);

  const handleDiv = (obj) => {
    setNewDiv([...newDiv.filter((div) => div !== obj)]);
  };

  return (
    <section
      className="main-grid absolute top-0 left-0 grid h-full w-full border-[2px] border-[#ededed] overflow-hidden"
      style={{
        gridTemplateColumns: `${cols.value.join(" ")}`,
        gridTemplateRows: `${rows.value.join(" ")}`,
        gridColumnGap: `${cols.gap}px`,
        gridRowGap: `${rows.gap}px`,
      }}
    >
      {newDiv.map((div, index) => {
        return (
          <div
            className="relative"
            key={index}
            style={{
              gridArea: `${div}`,
              background: `hsl(${(index + 1) * 20}, 60%, 50%, 0.283)`,
            }}
          >
            <p className="absolute top-[5px] left-[5px] font-semibold text-[1.1rem]">
              div {`${index + 1}`}
            </p>
            <button
              type="button"
              className="z-50 absolute bottom-[5px] text-[1.2rem] right-[5px] p-[0.2rem]"
              onClick={() => handleDiv(div)}
            >
              x
            </button>
          </div>
        );
      })}
    </section>
  );
}

export default Maingrid;
