import React from 'react';
import Login from './Component/login/Login';
import Block from './Component/block/Block';
import Store from './Component/store/Store';
import MainMenu from './Component/main-menu/MainMenu';

function App() {
  return (
    <div>
      {/* <Login></Login> */}
      <Block></Block>
      <Store></Store>
      <MainMenu></MainMenu>
    </div>
  );
}

export default App;
