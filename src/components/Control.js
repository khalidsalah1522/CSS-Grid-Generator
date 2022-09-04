import React from "react";

// components
import Input from "./control/Input";

function Control({ setShowResult }) {
  const inputs = [
    { label: "columns", gap: false, min: "1", max: "12", average: "5" },
    { label: "rows", gap: false, min: "1", max: "12", average: "5" },
    { label: "columns", gap: true, min: "0", max: "50", average: "0" },
    { label: "rows", gap: true, min: "0", max: "50", average: "0" },
  ];

  return (
    <section className="generator flex flex-col items-center h-[90%] w-[18%]">
      <h4 className="text-center font-Gemunu text-[2.4rem] tracking-widest text-[#ff7979] mt-[-1rem]">
        Control
      </h4>
      {inputs.map((input, i) => {
        const { label, min, max, average, gap } = input;
        return (
          <Input
            key={i}
            label={label}
            min={min}
            max={max}
            average={average}
            gap={gap}
          />
        );
      })}
      <div className="generator-container mt-[2rem] w-full h-[60%] flex flex-col items-center justify-between"></div>
      <button
        type="button"
        className="mt-[2rem] font-NATS font-semibold px-[0.4rem] py-[0.3rem] text-[1.1rem] tracking-wider rounded bg-[#fff] text-[#f36a6a]"
        onClick={() => setShowResult(true)}
      >
        Show Result
      </button>
    </section>
  );
}

export default Control;
