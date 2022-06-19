import React from "react";

function InputTheValue({ index, type, setFun, fun }) {
  const handleValue = (e) => {
    if (e.key === "Enter") {
      fun.value[index] = e.target.value;
      setFun({ ...fun });
    }
  };

  const handleBlur = (e) => {
    fun.value[index] = e.target.value ? e.target.value : "1fr";
    setFun({ ...fun });
  };

  return (
    <div
      className="flex items-center justify-center"
      style={
        type === "row"
          ? { gridArea: `${index + 1} / 1 /  ${index + 2} / 2` }
          : { gridArea: `1 / ${index + 1} / 2 / ${index + 2}` }
      }
    >
      <input
        type="text"
        id={`${index + 1}`}
        className="outline-none z-2 text-[#fff] font-bold p-[0.1rem] w-[3rem] bg-[#494949] placeholder:text-[#fff]"
        onBlur={(e) => handleBlur(e)}
        onKeyDown={(e) => handleValue(e)}
      />
    </div>
  );
}

export default InputTheValue;
