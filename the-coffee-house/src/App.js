import React from 'react';
import Login from './Component/login/Login';
import MainMenu from './Component/main-menu/MainMenu';
import Block from './Component/block/Block';
import Store from './Component/store/Store';
import MainSlider from './Component/main-slider/MainSlider';
import Product from './Component/product/Product';
import Footer from './Component/footer/Footer';

function App() {
  return (
    <div>
      <Login></Login>
      <MainMenu></MainMenu>
      {/* <Login></Login> */}
      <MainSlider></MainSlider>
      <Product></Product>
      <Block></Block>
      <Store></Store>
      <Footer></Footer>
    </div>
  );
}

export default App;
