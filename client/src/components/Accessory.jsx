import React              from 'react';
import {Link}             from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'

class Accessory extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.accessory && this.state.accessoryLoaded === true) {
      return (
        <p>Error loading Accessories. Try again later.</p>
      );
    } else if (!this.state.accessory) {
      return (
        <p>Loading Accessories...</p>
      );
    } else if (this.state.accessory.length === 0) {
      return (
        <p>Sorry, no Accessories are available</p>
      );
    } else {
      return (
        <div>
          <h1>{this.state.accessory.img}</h1>
          <h1>{this.state.accessory.name}</h1>
          <h3>Description: {this.state.accessory.description}</h3>
          <h3>Colour: {this.state.accessory.colour}</h3>
          <h3>Price:  € {this.state.accessory.price}</h3>
          <Link to='/accessories'>Back to All Accessories</Link>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(`${Config.accessoriesAPI}/${this.props.accessoriesID}`))
      .then (res  => res.json())
      .then (json => {
        this.setState({accessory       : json});
        this.setState({accessoryLoaded : true});
      })
      .catch(err => {
        this.setState({accessoryLoaded: true});
      });
  }

}

export default Accessory;