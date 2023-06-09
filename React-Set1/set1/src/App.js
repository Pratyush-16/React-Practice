import "./App.css";
import { Employee } from "./Components/Employee";

import { Button } from "./Components/Button";
import { Stationery } from "./Components/Stationery";
import { Image } from "./Components/Image";
import { Products } from "./Components/Products";
import { ProductDetails } from "./Components/ProductDetails";
import { Students } from "./Components/Students";
import { EmployeeDetails } from "./Components/EmployeeDetails";


const items = ['pen', 'pencil', 'ruler', 'eraser']
const imageLink =
  'https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg'
  
const student = {
    name: 'John Doe',
    english: 90,
    maths: 80,
    computers: 70,
  }

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
      <hr/>
      <ProductDetails />
      <hr/>

      <Students student ={student}/>
      <hr/>

      <EmployeeDetails/>

    </div>
  );
}

export default App;
