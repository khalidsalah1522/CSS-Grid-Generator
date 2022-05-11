import React, { useEffect, useContext, useState } from "react";
import { rowsContext, colContext, divContext } from "../Context/Context";

function ShowResult({ setShowResult }) {
  const { newDiv } = useContext(divContext);
  const { rowsMount } = useContext(rowsContext);
  const { colsMount } = useContext(colContext);

  let getDivs;
  const [values, setValues] = useState([]);
  const divs = [];

  useEffect(() => {
    getDivs = document.querySelectorAll(".newDiv div");
    getDivs.forEach((div) => {
      divs.push(window.getComputedStyle(div).gridArea);
    });
    setValues(divs);
  }, [newDiv]);

  return (
    <div className="results z-[100] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full bg-[#292929b2] flex items-center justify-center">
      <div className="result-container relative w-[45%] p-[1rem] h-[70%] bg-[#222] text-[#f4f2f2]">
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
              {`${colsMount.kind.join(" ")};`}
            </div>
            <div>
              <span className="text-[#6ef587] text-[1.1rem] font-bold tracking-wide">
                grid-template-rows:
              </span>{" "}
              {`${rowsMount.kind.join(" ")};`}
            </div>
            <div>
              <span className="text-[#6ef587] text-[1.1rem] font-bold tracking-wide">
                grid-column-gap:
              </span>{" "}
              {`${+colsMount.gap}px`}
            </div>
            <div>
              <span className="text-[#6ef587] text-[1.1rem] font-bold tracking-wide">
                grid-row-gap:
              </span>{" "}
              {`${+rowsMount.gap}px`}
            </div>
          </div>
          {`}`}
        </div>
        <div className="children mt-[1rem]">
          {values.map((value, index) => (
            <div key={value + index}>
              <span className="text-[#fdff6f] text-[1.1rem] font-bold tracking-wide">
                {`.div ${index + 1}`}{" "}
              </span>
              {`{`}
              <span>
                {" "}
                <span className="text-[#6ef587] font-bold tracking-wide">
                  grid-area:
                </span>{" "}
                {` ${value} ;`}{" "}
              </span>
              {`}`}
            </div>
          ))}
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
