import React from "react";
import github from "../style/download.png";

function Header() {
  return (
    <section className="header lg:h-[15%] flex flex-col items-center justify-between lg:flex-row sm:w-[100%] sm:h-[30%] lg:w-[40%]">
      <div className="header-container lg:mt-[-3.5rem] h-[80%] text-center flex flex-col items-center">
        <h2 className="text-[#77f783] font-Gemunu sm:text-[2rem] sm:mt-[2rem]">
          CSS Grid Generator
        </h2>
        <h3 className="text-[#f7f4f4] font-semibold text-[1.4rem]">
          <span className="tracking-wider">Built by </span>
          <a
            href="https://www.linkedin.com/in/khalidsalah/"
            className="font-Gemunu tracking-wide bg-red-400 rounded p-[0.2rem] sm:text-[1rem]"
          >
            @Khalid Salah
          </a>
        </h3>
      </div>
      <div className="github  h-[80%] flex items-center justify-center w-[6rem] overflow-hidden">
        <a href="https://github.com/khalidsalah1522/CSS-Grid-Generator">
          <img src={github} alt="" className="w-[60%] h-[60%] rounded-[12px]" />
        </a>
      </div>
    </section>
  );
}

export default Header;
