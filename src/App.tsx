import React from 'react';
import './App.css';
import Product from './components/Products/product';

const Products = [
  {
    name: 'ice cream',
    icon: '🍧',
    price: 5000
  },
  {
    name: 'chocolate',
    icon: '🍫',
    price: 5000
  },
  {
    name: 'A piece of watermelon',
    icon: '🍉',
    price: 6000
  },
]
function App(){
  return (
    <div className='App'>
      <Product names={Products}/>
    </div>
  );
}

export default App;
