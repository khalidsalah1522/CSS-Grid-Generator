import React from "react";
import Control from "../components/Control";
import Grid from "../components/Grid";

function Main({ setShowResult }) {
  return (
    <section className="main-container hidden lg:flex h-[70%] w-[80%] text-[white] items-center justify-between">
      <Grid />
      <Control setShowResult={setShowResult} />
    </section>
  );
}

export default Main;
