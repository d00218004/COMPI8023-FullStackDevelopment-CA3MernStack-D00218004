import React from 'react';
import { Router } from "@reach/router";
import Surface from './Surface';
import Surfaces from './Surfaces';
import AddSurface from './AddSurface';
import Accessory from './Accessory';
import Accessories from './Accessories';
import AddAccessory from './AddAccessory';
import Console from './Console';
import Consoles from './Consoles';
import AddConsole from './AddConsole';
import '../scss/main.css';
import Navmenu from './NavigationBar';
import Slider from './Slider';
import VideoGallery from './VideoGallery';
import Footer from './Footer';
class App extends React.Component {

  render() {
    return (
      <div>
        <Navmenu />
        <Router>
          <Slider path='/' />
        </Router>
        <Router>
          <VideoGallery path='/' />
          <Surfaces path='/surfaces' />
          <Surface path='/surface/:surfaceID' />
          <AddSurface path='/surfaces/add-surface/' />
          <Accessories path='/accessories' />
          <Accessory path='/accessory/:accessoryID' />
          <AddAccessory path='/accessories/add-accessory/' />
          <Consoles path='/consoles' />
          <Console path='/console/:consoleID' />
          <AddConsole path='/consoles/add-console/' />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
