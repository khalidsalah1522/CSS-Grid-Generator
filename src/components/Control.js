import React, { useContext } from "react";

// components
import Button from "./Button";
import Input from "./Input";

// context
import { colsContext, rowsContext } from "../Context/Context";

function Control({ setShowResult }) {
  const { cols, setCols } = useContext(colsContext);
  const { rows, setRows } = useContext(rowsContext);

  return (
    <section className="generator flex flex-col items-center h-[90%] w-[18%]">
      <h4 className="text-center font-Gemunu text-[2.4rem] tracking-widest text-[#ff7979] mt-[-1rem]">
        Control
      </h4>
      <div className="generator-container mt-[2rem] w-full h-[60%] flex flex-col items-center justify-between">
        <Input
          label="columns"
          min="1"
          max="12"
          average="5"
          fun={cols}
          setFun={setCols}
        />
        <Input
          label="rows"
          min="1"
          max="12"
          average="5"
          fun={rows}
          setFun={setRows}
        />
        <Input
          label="Column Gap"
          min="0"
          max="60"
          average="0"
          fun={cols}
          setFun={setCols}
        />
        <Input
          label="Column Row"
          min="0"
          max="60"
          average="0"
          fun={rows}
          setFun={setRows}
        />
      </div>
      <Button setShowResult={setShowResult} content={"Show Result"} />
    </section>
  );
}

export default Control;
