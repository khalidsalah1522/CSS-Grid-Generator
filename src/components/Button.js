import React from "react";

function Button({ content, setShowResult }) {
  return (
    <>
      <button
        type="button"
        className="mt-[2rem] font-NATS font-semibold px-[0.4rem] py-[0.3rem] text-[1.1rem] tracking-wider rounded bg-[#fff] text-[#f36a6a]"
        onClick={() => setShowResult(true)}
      >
        {content}
      </button>
    </>
  );
}

export default Button;
