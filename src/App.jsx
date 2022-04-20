import React, { useState, useMemo, useEffect } from "react";
import Header from "./components/Header";
import Generator from "./components/Generator";
import Grid from "./components/Grid";

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

  const checkCol = useMemo(() => ({ colsMount, setColsMount }), [colsMount]);
  const checkRow = useMemo(() => ({ rowsMount, setRowsMount }), [rowsMount]);
  const checkDiv = useMemo(() => ({ newDiv, setNewDev }), [newDiv]);

  useEffect(() => {
    console.log(newDiv);
  }, [newDiv]);

  return (
    <div className="app-container bg-[#222] overflow-hidden h-screen flex flex-col items-center justify-between">
      <Header />
      <div className="main-container h-[650px] w-[80%] text-[white] flex items-center justify-between">
        <colContext.Provider value={checkCol}>
          <rowsContext.Provider value={checkRow}>
            <divContext.Provider value={checkDiv}>
              <Grid />
              <Generator />
            </divContext.Provider>
          </rowsContext.Provider>
        </colContext.Provider>
      </div>
    </div>
  );
}

export default App;
