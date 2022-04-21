import React from "react";
import github from "../assets/image/github.png";

function Header() {
  return (
    <section className="header w-[50%] flex items-center justify-between mb-[5rem]">
      <div className="header-container text-center ">
        <h2 className="text-[3rem] text-[#77f783] font-Gemunu">
          CSS Grid Generator
        </h2>
        <h3 className="text-[#f7f4f4] font-semibold text-[1.4rem]">
          <span className="tracking-wider">Built by </span>
          <a
            href="https://www.linkedin.com/in/khalidsalah/"
            className="font-Gemunu tracking-wide bg-red-400 rounded p-[0.2rem]"
          >
            @Khalid Salah
          </a>
        </h3>
      </div>
      <div className="github flex items-center justify-center w-[6rem] h-[5rem] overflow-hidden">
        <a href="https://github.com/khalidsalah1522/CSS-Grid-Generator">
          <img src={github} alt="" className="w-full h-full rounded-[12px]" />
        </a>
      </div>
    </section>
  );
}

export default Header;
