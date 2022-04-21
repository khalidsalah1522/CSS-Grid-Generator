import React, { useEffect, useContext, useState } from "react";
import { divContext } from "../Context/Context";

function ShowResult({ setShowResult }) {
  let getDivs = document.querySelectorAll(".newDiv div");
  const divs = [];
  const [values, setValues] = useState([]);
  const { newDiv } = useContext(divContext);

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
          <span className="text-[1.4rem] text-[#e4f567]">.parent </span>
          {`{`}
          <div className="pl-[1rem]">
            <div>
              <span className="text-[#6ef587] text-[1.1rem]">display:</span>{" "}
              {`grid;${1}`}
            </div>
            <div>
              <span className="text-[#6ef587] text-[1.1rem]">
                grid-template-columns:
              </span>{" "}
              {`repeat(12, 1fr)${1};`}
            </div>
            <div>
              <span className="text-[#6ef587] text-[1.1rem]">
                grid-template-rows:
              </span>{" "}
              {`repeat(12, 1fr);${1}`}
            </div>
            <div>
              <span className="text-[#6ef587] text-[1.1rem]">
                grid-column-gap:
              </span>{" "}
              {`0px;${1}`}
            </div>
            <div>
              <span className="text-[#6ef587] text-[1.1rem]">
                grid-row-gap:
              </span>{" "}
              {`0px;${1}`}
            </div>
          </div>
          {`}`}
        </div>
        <div className="children mt-[1rem]">
          {values.map((value, index) => (
            <div key={value + index}>
              <span className="text-[#fdff6f] text-[1.1rem]">
                {`.div ${index + 1}`}{" "}
              </span>
              {`{`}
              <span>
                {" "}
                <span className="text-[#6ef587]">grid-area:</span>{" "}
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
