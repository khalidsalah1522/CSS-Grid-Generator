import React from "react";

function Header() {
  return (
    <section className="header mb-[5rem]">
      <div className="header-container text-center ">
        <h2 className="text-[3rem] text-[#77f783] font-Gemunu">
          CSS Grid Generator
        </h2>
        <h3 className="text-[#f7f4f4] font-semibold text-[1.4rem]">
          <span className="tracking-wider">Built by </span>
          <a href="abcd" className="font-Gemunu tracking-wide">
            @Khalid Salah
          </a>
        </h3>
      </div>
    </section>
  );
}

export default Header;
