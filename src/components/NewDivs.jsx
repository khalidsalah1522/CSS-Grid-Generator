import React, { useContext } from "react";
import { rowsContext, colContext, divContext } from "../Context/Context";

function NewDivs() {
  const { rowsMount } = useContext(rowsContext);
  const { colsMount } = useContext(colContext);
  const { newDiv, setNewDev } = useContext(divContext);

  const column = colsMount.kind;
  const row = rowsMount.kind;

  const handleDiv = (obj) => {
    setNewDev([...newDiv.filter((div) => div !== obj)]);
  };

  return (
    <section
      className="newDiv absolute top-0 left-0 grid h-full w-full border-[2px] border-[#ededed] overflow-hidden"
      style={{
        gridTemplateColumns: `${column.join(" ")}`,
        gridTemplateRows: `${row.join(" ")}`,
        gridRowGap: `${+rowsMount.gap}px`,
        gridColumnGap: `${+colsMount.gap}px`,
      }}
    >
      {newDiv.map((divEle, index) => {
        const { down, up } = divEle;

        return (
          <div
            className="relative"
            key={+up[1] * +down[1] * Math.random()}
            style={{
              gridArea: `${+down[1] >= +up[1] ? +up[1] : down[1]} / ${
                +down[0] >= +up[0] ? +up[0] : down[0]
              } / ${+up[1] >= +down[1] ? +up[1] + 1 : +down[1] + 1} / ${
                +up[0] >= +down[0] ? +up[0] + 1 : +down[0] + 1
              }`,
              background: `hsl(${(index + 1) * 20}, 60%, 50%, 0.283)`,
            }}
          >
            <p className="absolute top-[5px] left-[5px] font-semibold text-[1.1rem]">{`div ${
              index + 1
            }`}</p>
            <button
              type="button"
              className="z-50 absolute bottom-[5px] text-[1.2rem] right-[5px] p-[0.2rem]"
              onClick={() => handleDiv(divEle)}
            >
              x
            </button>
          </div>
        );
      })}
    </section>
  );
}

export default NewDivs;
