
import './App.css';
import { Hello } from './Components/Hello';
import { Product } from './Components/Product';
import { UserProfile } from './Components/UserProfile';


const userData = {
  name: 'John',
  age: 25,
  email: 'john@example.com',
}

function App() {
  return (
    <div className="App">
      
      <Hello name="Pratyush"/>
      <hr/>

      <Product productName ="Yonex Racquet" price="8500"/>
      <hr/>

      <UserProfile userData={userData}/>
      <hr/>
    </div>
  );
}

export default App;
