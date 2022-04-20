import React, { useContext } from "react";
import { rowsContext, colContext } from "../Context/Context";

function Generator() {
  const { colsMount, setColsMount } = useContext(colContext);
  const { rowsMount, setRowsMount } = useContext(rowsContext);

  return (
    <section className="generator h-[90%] w-[18%]">
      <h4 className="text-center font-Gemunu text-[2.4rem] tracking-widest text-[#ff7979] mt-[-1rem]">
        Control
      </h4>
      <div className="generator-container mt-[2rem] w-full h-[60%] flex flex-col items-center justify-between">
        <div className="flex gap-[5px] flex-col items-center font-NATS font-semibold tracking-wider text-[1.2rem]">
          <label htmlFor="columns">Columns</label>
          <input
            className="w-[3rem] h-[1.8rem] outline-none text-[#222] px-[0.2rem]"
            type="number"
            name="columns"
            id="columns"
            min="1"
            max="12"
            value={colsMount.kind.length}
            placeholder="5"
            onChange={(e) =>
              setColsMount({
                ...colsMount,
                kind:
                  colsMount.kind && +e.target.value > colsMount.kind.length - 1
                    ? [...colsMount.kind, "1fr"]
                    : Array(+e.target.value).fill("1fr"),
              })
            }
          />
        </div>
        <div className="flex gap-[5px] flex-col items-center font-NATS font-semibold tracking-wider text-[1.2rem]">
          <label htmlFor="cGap">Column Gap (px)</label>
          <input
            className="w-[3rem] h-[1.8rem] outline-none text-[#222] px-[0.2rem]"
            type="number"
            name="cGap"
            id="cGap"
            min="0"
            max="60"
            value={colsMount.gap}
            onChange={(e) =>
              setColsMount({ ...colsMount, gap: e.target.value })
            }
          />
        </div>
        <div className="flex gap-[5px] flex-col items-center font-NATS font-semibold tracking-wider text-[1.2rem]">
          <label htmlFor="row">Row</label>
          <input
            className="w-[3rem] h-[1.8rem] outline-none text-[#222] px-[0.2rem]"
            type="number"
            name="row"
            id="row"
            min="1"
            max="12"
            value={rowsMount.kind.length}
            onChange={(e) =>
              setRowsMount({
                ...rowsMount,
                kind:
                  rowsMount.kind && +e.target.value > rowsMount.kind.length - 1
                    ? [...rowsMount.kind, "1fr"]
                    : Array(+e.target.value).fill("1fr"),
              })
            }
          />
        </div>
        <div className="flex gap-[5px] flex-col items-center font-NATS font-semibold tracking-wider text-[1.2rem]">
          <label htmlFor="rGap">Row Gap (px)</label>
          <input
            className="w-[3rem] h-[1.8rem] outline-none text-[#222] px-[0.2rem]"
            type="number"
            name="rGap"
            id="rGap"
            min="0"
            max="60"
            value={rowsMount.gap}
            onChange={(e) =>
              setRowsMount({ ...rowsMount, gap: e.target.value })
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Generator;
