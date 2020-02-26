import React              from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import {Link}             from '@reach/router';
import * as Config        from '../config.json'

class Surfaces extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.surfaces && this.state.surfacesLoaded === true) {
      return (
        <p>Error loading Surfaces. Try again later.</p>
      );
    } else if (!this.state.surfaces) {
      return (
        <p>Loading Surfaces...</p>
      );
    } else if (this.state.surfaces.length === 0) {
      return (
        <p>Sorry, no Surfaces are available</p>
      );
    } else {
      return (
        <div>
          <h1>All Surfaces in the database</h1>
          <ul>
            {this.state.surfaces.map(surface => (
              <li key={`surface_${surface._id}`}><Link to={`/surface/${surface._id}`}>{surface.name}</Link></li>
            ))}
          </ul>
          <p><Link to='/add-surface'>Add a new Surface</Link></p>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(Config.surfacesAPI))
      .then (res  => res.json())
      .then (json => {
        this.setState({surfaces       : json});
        this.setState({surfacesLoaded : true});
      })
      .catch(err => {
        this.setState({surfacesLoaded: true});
      });
  }

}

export default Surfaces;

