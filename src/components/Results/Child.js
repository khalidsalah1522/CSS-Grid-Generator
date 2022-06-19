import React from "react";

function Child({ value, index }) {
  return (
    <div>
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
      {`}`}{" "}
    </div>
  );
}

export default Child;
