import './App.css';
import { React, useState } from "react";

function App() {
  const [value, setValue] = useState([new Map()]);
  const handleCellChange = (event) => {
    const valueMap = new Map();
    valueMap.set(event.target.id, event.target.value)
    setValue(...value, valueMap);
  }
  const handleGetValue = (id) => {
    return value.map((map) => {
      return map.get(id);
    })
  }
  console.log(value);
  return (
    <div className="App">
      <header>
        CLONED SUDOKU
      </header>
      <div className="App-header">
        {
          Array.from(Array(9), (e, row) => {
            return (
              <div id={"row-"+(row+1)} key={row} className="row">
                {
                  Array.from(Array(9), (e, cell) => {
                    return (
                      <input
                        id={"row-"+(row+1)+"-cell-"+(cell+1)}
                        key={cell}
                        className="cell"
                        type="number"
                        min="1" max="9"
                        // value={handleGetValue("row-"+(row+1)+"-cell-"+(cell+1))}
                        onChange={handleCellChange}
                      />
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
