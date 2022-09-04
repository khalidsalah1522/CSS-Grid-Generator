import React, { useState } from "react";

import "./style/grid.css";

// Components
import Header from "./sections/Header";
import Main from "./sections/Main";
import Results from "./components/Results";

// Context
import { colsContext, rowsContext, newDivContext } from "./Context/Context";

function App() {
  const [cols, setCols] = useState({
    value: ["1fr", "1fr", "1fr", "1fr", "1fr"],
    gap: 0,
  });
  const [rows, setRows] = useState({
    value: ["1fr", "1fr", "1fr", "1fr", "1fr"],
    gap: 0,
  });
  const [newDiv, setNewDiv] = useState([]);
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="app-container relative bg-[#222] overflow-hidden h-screen flex flex-col items-center justify-between">
      <Header />
      <colsContext.Provider value={{ cols, setCols }}>
        <rowsContext.Provider value={{ rows, setRows }}>
          <newDivContext.Provider value={{ newDiv, setNewDiv }}>
            <Main setShowResult={setShowResult} />
            {showResult ? <Results setShowResult={setShowResult} /> : ""}
            <div className="block lg:hidden absolute top-[50%] left-[50%] text-[#fff] translate-x-[-50%] translate-y-[-50%] text-center">
              This Page not for Small screen, Enter this page on bigger screen,
              [ Laptop, Desktop ]
            </div>
          </newDivContext.Provider>
        </rowsContext.Provider>
      </colsContext.Provider>
    </div>
  );
}

export default App;
