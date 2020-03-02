import React from 'react';
import { Router } from "@reach/router";
import Surfaces from './Surfaces';
import Surface from './Surface';
import AddSurface from './AddSurface';
import Accessories from './Accessories';
import AddAccessory from './AddAccessory';
import Accessory from './Accessory';
import '../scss/main.css';


import Navmenu from './NavigationBar';
import Slider from './Slider';
import Breadcrumb from './Breadcrumb';

class App extends React.Component {

  render() {
    return (
      <div>
        <Navmenu />
        <Breadcrumb />
        <Slider />
        <Router>
          <Surfaces path='/' />
          <Surface path='/surface/:surfaceID' />
          <AddSurface path='/add-surface/' />

          <Accessories path='/accessories' />
          <Accessory path='/accessory/:accessoryID' />
          <AddAccessory path='/accessories/add-accessory/' />
        </Router>
      </div>
    );
  }

}

export default App;
