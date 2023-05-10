import "./App.css";
import { Employee } from "./Components/Employee";

import { Button } from "./Components/Button";
import { Stationery } from "./Components/Stationery";


const items = ['pen', 'pencil', 'ruler', 'eraser']

function App() {
  return (
    <div className="App">
      <Employee />
      <hr/>
      <Button
        buttonStyles={{
          backgroundColor: "lightgreen",
          color: "darkgreen",
          borderRadius: "5px",
          padding: "10px",
        }}
      />
      <hr/>

      <Stationery items ={items} header = "Stationery Items"  />
      <hr/>
    </div>
  );
}

export default App;
