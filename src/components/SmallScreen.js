import React from "react";

function SmallScreen() {
  return (
    <div className="block lg:hidden absolute top-[50%] left-[50%] text-[#fff] translate-x-[-50%] translate-y-[-50%] text-center">
      This Page not for Small screen, Enter this page on bigger screen, [
      Laptop, Desktop ]
    </div>
  );
}

export default SmallScreen;
