import "./App.css";
import { Employee } from "./Components/Employee";

import { Button } from "./Components/Button";
import { Stationery } from "./Components/Stationery";
import { Image } from "./Components/Image";
import { Products } from "./Components/Products";


const items = ['pen', 'pencil', 'ruler', 'eraser']
const imageLink =
  'https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg'
 

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

      <Image imageLink= {imageLink} caption ="Spring Flowers"/>
      <hr/>
      <Products/>
    </div>
  );
}

export default App;
