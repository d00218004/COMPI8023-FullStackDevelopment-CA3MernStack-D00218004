import React from 'react';
import { Router } from "@reach/router";
import Surfaces from './Surfaces';
import Surface from './Surface';
import AddSurface from './AddSurface';
import Accessories from './Accessories';
import AddAccessory from './AddCake';
import Accessory from './Accessory';





class App extends React.Component {

  render() {
    return (
      <Router>
        <Surfaces path='/' />
        <Surface path='/surface/:surfaceID' />
        <AddSurface path='/add-surface/' />
        <Accessories path='/accessories' />
      </Router>
    );
  }

}

export default App;
