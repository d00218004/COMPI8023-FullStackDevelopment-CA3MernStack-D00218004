import React from 'react';
import { Link } from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config from '../config.json'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
class Surface extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.surface && this.state.surfaceLoaded === true) {
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
        <Row id="product-card">
          <div class="container-fluid">
            <div className='card mb-4'>
              <h2 className='card-header'>{this.state.surface.name}</h2>
              <div className='row'>
                <div className='col-12 col-md-3'>
                  <div className="product-image">
                    <img id="product-image" src={this.state.surface.img} alt="Product Image" />
                  </div>
                </div>
                <div className='col-12 col-md-9'>
                  <div className='card-body'>
                    <h6 id='product-description' >Name: </h6>
                    <p className='card-text'>{this.state.surface.name}</p>
                    <h6 id='product-description' >Description: </h6>
                    <p className='card-text'>{this.state.surface.description}</p>
                    <h6 id='product-description' >Size: </h6>
                    <p className='card-text'>{this.state.surface.size}</p>
                    <h6 id='product-specification'>Colour: </h6>
                    <p className='card-text'>{this.state.surface.colour}</p>
                    <h6 id='product-description' >Memory: </h6>
                    <p className='card-text'>{this.state.surface.memory}</p>
                    <h6 id='product-description' >Storage: </h6>
                    <p className='card-text'>{this.state.surface.storage}</p>
                    <h6 id='product-description' >CPU: </h6>
                    <p className='card-text'>{this.state.surface.CPU}</p>
                    <h6 id='product-specification'>Price: €</h6>
                    <p className='card-text'>{this.state.surface.price}</p>
                    <Button href='/surfaces' variant="success">Back to All Surfaces</Button>
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
    fetch(urlToCurrentDomain(`${Config.surfacesAPI}/${this.props.surfaceID}`))
      .then(res => res.json())
      .then(json => {
        this.setState({ surface: json });
        this.setState({ surfaceLoaded: true });
      })
      .catch(err => {
        this.setState({ surfaceLoaded: true });
      });
  }

}

export default Surface;
