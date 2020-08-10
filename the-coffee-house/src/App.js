import React from 'react';
import Login from './Component/login/Login';
import MainMenu from './Component/main-menu/MainMenu';
import Block from './Component/block/Block';
import Store from './Component/store/Store';
import Product from './Component/product/Product';
import MainSlider from './Component/main-slider/MainSlider';

function App() {
  return (
    <div>
      <Login></Login>
      <MainMenu></MainMenu>
      {/* <Login></Login> */}
      <MainSlider></MainSlider>
      <Block></Block>
      <Store></Store>
      <Product></Product>
    </div>
  );
}

export default App;
