import React    from 'react';
import {Router} from "@reach/router";
import Surfaces   from './Surfaces';
import Surface    from './Surface';
import AddSurface from './AddSurface';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Surfaces   path='/' />
        <Surface    path='/surface/:surfaceID' />
        <AddSurface path='/add-surface/' />
      </Router>
    );
  }

}

export default App;
