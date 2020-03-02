import React from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import { Link } from '@reach/router';
import * as Config from '../config.json'

class Accessories extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.accessories && this.state.accessoriesLoaded === true) {
      return (
        <p>Error loading Accessories. Try again later.</p>
      );
    } else if (!this.state.accessories) {
      return (
        <p>Loading Accessories...</p>
      );
    } else if (this.state.accessories.length === 0) {
      return (
        <p>Sorry, no Accessories are available</p>
      );
    } else {
      return (
        <div>
          <h1>All Accessories in the database</h1>
          <ul>
            {this.state.accessories.map(accessory => (
              <li
                key={`accessory_${accessory._id}`}>
                <img id="product-image" src={accessory.img} alt="Product Image" />
                <Link to={`/accessory/${accessory._id}`}>{accessory.name}</Link>
              </li>
              
            ))
            }
          </ul>
          <p><Link to='/accessories/add-accessory'>Add a new Accessory</Link></p>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(Config.accessoriesAPI))
      .then(res => res.json())
      .then(json => {
        this.setState({ accessories: json });
        this.setState({ accessoriesLoaded: true });
      })
      .catch(err => {
        this.setState({ accessoriesLoaded: true });
      });
  }

}

export default Accessories;