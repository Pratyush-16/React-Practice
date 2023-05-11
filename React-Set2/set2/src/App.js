
import './App.css';
import { About } from './Components/About';
import { Articles } from './Components/Articles';
import { Color } from './Components/Color';
import { Gadgets } from './Components/Gadgets';
import { Hello } from './Components/Hello';
import { MyGadgets } from './Components/MyGadgets';
import { Phones } from './Components/Phones';
import { Product } from './Components/Product';
import { Todo } from './Components/ToDo';
import { UserProfile } from './Components/UserProfile';


const userData = {
  name: 'John',
  age: 25,
  email: 'john@example.com',
}

const products = [
  {
    id: 1,
    name: 'keyboard',
    description: 'Logitech Mechanical Keyboard',
    price: 2000,
  },
  { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
  {
    id: 3,
    name: 'monitor',
    description: 'Lenovo 32-inch display Monitor',
    price: 10000,
  },
  { id: 4, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
  {
    id: 5,
    name: 'speakers',
    description: 'Creative Desktop Speakers',
    price: 5000,
  },
  {
    id: 6,
    name: 'headphones',
    description: 'Sony over-the-ear wired Headphones with mic',
    price: 1500,
  },
  { id: 7, name: 'mobile', description: 'iPhone 12', price: 90000 },
]

const productsOne = [
  {
    id: 1,
    name: 'keyboard',
    description: 'Logitech Mechanical Keyboard',
    price: 2000,
  },
  { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
  { id: 3, name: 'mobile', description: 'iPhone 13', price: 61000 },
  {
    id: 4,
    name: 'monitor',
    description: 'Lenovo 32-inch display Monitor',
    price: 10000,
  },
  { id: 5, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
  {
    id: 6,
    name: 'speakers',
    description: 'Creative Desktop Speakers',
    price: 5000,
  },
  {
    id: 7,
    name: 'headphones',
    description: 'Sony over-the-ear wired Headphones with mic',
    price: 1500,
  },
  { id: 8, name: 'mobile', description: 'iPhone 12', price: 90000 },
]

const title = 'React is awesome'
const content = 'React is a JavaScript library for building user interfaces.'

const heading = 'About Me'
const name = 'Preeti' // you can put your name
const learning = 'I am learning React JS currently at neoG Camp.'

const gadgets = [
  {
    id: 1,
    name: 'keyboard',
    description: 'Logitech Mechanical Keyboard',
    price: 2000,
  },
  { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
  {
    id: 3,
    name: 'speakers',
    description: 'Bose L1 Pro32 Portable',
    price: 256000,
  },
  { id: 4, name: 'mobile', description: 'iPhone 13', price: 61000 },
  {
    id: 5,
    name: 'monitor',
    description: 'Lenovo 32-inch display Monitor',
    price: 10000,
  },
  { id: 6, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
  {
    id: 7,
    name: 'speakers',
    description: 'Creative Desktop Speakers',
    price: 5000,
  },
  {
    id: 8,
    name: 'headphones',
    description: 'Sony over-the-ear wired Headphones with mic',
    price: 1500,
  },
  { id: 9, name: 'mobile', description: 'iPhone 12', price: 90000 },
]

const colors = ['#EE4B2B',  '#89CFF0', '#7FFFD4']

const todoItems = [
  {
    id: 1,
    title: 'Complete practice set',
    description: 'Practice set 1 of React',
    isCompleted: true,
  },
  {
    id: 2,
    title: 'Attend revision session',
    description: 'Revision session of React',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Watch recording',
    description: 'Live session recording of React',
    isCompleted: true,
  },
  {
    id: 4,
    title: 'Attend DSH',
    description: 'Doubt Solving Hours of React',
    isCompleted: false,
  },
  {
    id: 5,
    title: 'Complete practice set',
    description: 'Practice set 2 of React',
    isCompleted: false,
  },
]


function App() {
  return (
    <div className="App">
      
      <Hello name="Pratyush"/>
      <hr/>

      <Product productName ="Yonex Racquet" price="8500"/>
      <hr/>

      <UserProfile userData={userData}/>
      <hr/>

      <Gadgets products ={products}/>
      <hr/>
      
      <Phones productsOne={productsOne}/>
      <hr/>

      <Articles title={title} content={content}/>
      <hr/>

      <About heading={heading}  name={name} learning={learning}/>
      <hr/>

      <MyGadgets gadgets={gadgets}/>
      <hr/>

      <Color colors={colors}/>
      <hr/>

      <Todo todoItems={todoItems}/>
    </div>

    
  );
}

export default App;
