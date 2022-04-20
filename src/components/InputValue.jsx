import React from "react";

function InputValue({ unit, index, setType, type, typeStr }) {
  const { kind } = type;

  const handlePress = (e) => {
    if (e.key === "Enter") {
      kind[+e.target.id - 1] = e.target.value;
      setType({ gap: type.gap, kind });
    }
  };

  const handleBlur = (e) => {
    kind[+e.target.id - 1] = e.target.value;
    setType({ gap: type.gap, kind });
  };

  return (
    <div
      className="flex items-center justify-center"
      key={unit + index * Math.random()}
      style={
        typeStr === "row"
          ? { gridArea: `${index + 1} / 1 /  ${index + 2} / 2` }
          : { gridArea: `1 / ${index + 1} / 2 / ${index + 2}` }
      }
    >
      <input
        type="text"
        id={`${index + 1}`}
        onBlurCapture={handleBlur}
        onKeyDown={handlePress}
        placeholder={kind[index]}
        className="outline-none z-2 text-[#fff] font-bold p-[0.1rem] w-[3rem] bg-[#494949] placeholder:text-[#fff]"
      />
    </div>
  );
}

export default InputValue;
