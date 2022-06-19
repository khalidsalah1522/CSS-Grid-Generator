import React, { useState } from "react";

// Components
import Header from "./sections/Header";
import Main from "./sections/Main";
import Results from "./components/Results";

// Context
import { colsContext, rowsContext, newDivContext } from "./Context/Context";
import SmallScreen from "./components/SmallScreen";

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
            <SmallScreen />
          </newDivContext.Provider>
        </rowsContext.Provider>
      </colsContext.Provider>
    </div>
  );
}

export default App;
