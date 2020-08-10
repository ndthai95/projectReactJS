import React from 'react';
import Login from './Component/login/Login';
import MainMenu from './Component/main-menu/MainMenu';
import Block from './Component/block/Block';
import Store from './Component/store/Store';
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
    </div>
  );
}

export default App;
