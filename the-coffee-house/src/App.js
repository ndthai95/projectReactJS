import React from 'react';
import Login from './Component/login/Login';
import Block from './Component/block/Block';
import Store from './Component/store/Store';
import MainMenu from './Component/main-menu/MainMnu';

function App() {
  return (
    <div>
      {/* <Login></Login> */}
      <MainMenu></MainMenu>
      <Block></Block>
      <Store></Store>
    </div>
  );
}

export default App;
