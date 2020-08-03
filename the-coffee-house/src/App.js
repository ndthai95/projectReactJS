import React from 'react';
import Login from './Component/login/Login';
import Block from './Component/block/Block';
import Store from './Component/store/Store';
import Product from './Component/product/Product';

function App() {
  return (
    <div>
      {/* <Login></Login> */}
      <Product></Product>
      <Block></Block>
      <Store></Store>
    </div>
  );
}

export default App;
