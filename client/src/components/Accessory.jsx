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
        <p>Error loading Surfaces. Try again later.</p>
      );
    } else if (!this.state.surface) {
      return (
        <p>Loading Surfaces...</p>
      );
    } else if (this.state.surface.length === 0) {
      return (
        <p>Sorry, no Surfaces are available</p>
      );
    } else {
      return (
        <div>
          <h1>{this.state.surface.name}</h1>
          <h3>Memory: {this.state.surface.memory}</h3>
          <h3>Colour: {this.state.surface.colour}</h3>
          <h3>Price:  € {this.state.surface.price}</h3>
          <Link to='/'>Back to All Surfaces</Link>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(`${Config.surfacesAPI}/${this.props.surfaceID}`))
      .then (res  => res.json())
      .then (json => {
        this.setState({surface       : json});
        this.setState({surfaceLoaded : true});
      })
      .catch(err => {
        this.setState({surfaceLoaded: true});
      });
  }

}

export default Accessory;