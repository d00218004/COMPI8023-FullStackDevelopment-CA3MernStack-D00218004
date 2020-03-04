import React from 'react';
import { Link } from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config from '../config.json'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
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
        <Row id="product-card">
          <div class="container-fluid">
            <div className='card mb-4'>
              <h2 className='card-header'>{this.state.accessory.name}</h2>
              <div className='row'>

                <div className='col-12 col-md-3'>
                  <div className="product-image">
                    <img src={this.state.accessory.img} alt="Product Image" />
                  </div>
                </div>

                <div className='col-12 col-md-9'>
                  <div className='card-body'>
                    <h6 id='product-description' >Name: </h6>
                    <p className='card-text'>{this.state.accessory.name}</p>
                    <h6 id='product-description' >Description: </h6>
                    <p className='card-text'>{this.state.accessory.description}</p>
                    <h6 id='product-description' >Colour: </h6>
                    <p className='card-text'>{this.state.accessory.colour}</p>
                    <h6 id='product-specification'>Price: €</h6>
                    <p className='card-text'>{this.state.accessory.price}</p>
                    <Button href='/accessories' variant="success">Back to All Accessories</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>

      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(`${Config.accessoriesAPI}/${this.props.accessoryID}`))
      .then(res => res.json())
      .then(json => {
        this.setState({ accessory: json });
        this.setState({ accessoryLoaded: true });
      })
      .catch(err => {
        this.setState({ accessoryLoaded: true });
      });
  }

}

export default Accessory;
