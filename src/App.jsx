import React, { useState, useMemo } from "react";
import Header from "./components/Header";
import Generator from "./components/Generator";
import Grid from "./components/Grid";
import ShowResult from "./components/ShowResult";

import { rowsContext, colContext, divContext } from "./Context/Context";

function App() {
  const [rowsMount, setRowsMount] = useState({
    kind: ["1fr", "1fr", "1fr", "1fr", "1fr"],
    gap: 0,
  });
  const [colsMount, setColsMount] = useState({
    kind: ["1fr", "1fr", "1fr", "1fr", "1fr"],
    gap: 0,
  });
  const [newDiv, setNewDev] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const checkCol = useMemo(() => ({ colsMount, setColsMount }), [colsMount]);
  const checkRow = useMemo(() => ({ rowsMount, setRowsMount }), [rowsMount]);
  const checkDiv = useMemo(() => ({ newDiv, setNewDev }), [newDiv]);
  return (
    <div className="app-container relative bg-[#222] overflow-hidden h-screen flex flex-col items-center justify-between">
      <Header />
      <div className="main-container hidden lg:flex h-[650px] w-[80%] text-[white] items-center justify-between">
        <colContext.Provider value={checkCol}>
          <rowsContext.Provider value={checkRow}>
            <divContext.Provider value={checkDiv}>
              <Grid />
              <Generator setShowResult={setShowResult} />
              {showResult ? <ShowResult setShowResult={setShowResult} /> : ""}
            </divContext.Provider>
          </rowsContext.Provider>
        </colContext.Provider>
      </div>
      <div className="not text-[2rem] uppercase absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#f0ecec] font-NATS tracking-wide text-center lg:hidden">
        Visit on a laptop or desktop
      </div>
    </div>
  );
}

export default App;
