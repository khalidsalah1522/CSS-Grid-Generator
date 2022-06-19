import React, { useState } from "react";

function Input({ label, min, max, average, fun, setFun }) {
  const [length, setLength] = useState(fun.value.length);
  const [gap, setGap] = useState(fun.gap);

  const inputStyle =
    "flex gap-[5px] flex-col items-center font-NATS font-semibold tracking-wider text-[1.2rem]";

  const handleValue = (e) => {
    if (+length < +e.target.value) {
      fun.value = [...fun.value, "1fr"];
    } else {
      fun.value.pop();
    }
    setFun({ value: fun.value, ...fun });
    setLength(e.target.value);
  };

  const handleGap = (e) => {
    setFun({ gap: gap, ...fun });
    setGap(e.target.value);
  };

  return (
    <div className={`${inputStyle}`}>
      <label htmlFor={label}>{label}</label>
      <input
        className="w-[3rem] h-[1.8rem] outline-none text-[#222] px-[0.2rem]"
        type="number"
        name="columns"
        id="columns"
        min={min}
        value={+max > 15 ? gap : length}
        max={max}
        placeholder={average}
        onChange={(e) => (+max > 15 ? handleGap(e) : handleValue(e))}
      />
    </div>
  );
}

export default Input;
