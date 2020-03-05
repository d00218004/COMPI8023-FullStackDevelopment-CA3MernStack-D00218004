import React from 'react';
import { Link } from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config from '../config.json'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

class Console extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.console && this.state.consoleLoaded === true) {
      return (
        <p>Error loading Consoles. Try again later.</p>
      );
    } else if (!this.state.console) {
      return (
        <p>Loading Console...</p>
      );
    } else if (this.state.console.length === 0) {
      return (
        <p>Sorry, no Consoles are available</p>
      );
    } else {
      return (
        <Row id="product-card">
          <div class="container-fluid">
            <div className='card mb-4'>
              <h2 className='card-header'>{this.state.console.name}</h2>
              <div className='row'>
                <div className='col-12 col-md-3'>
                  <div className="product-image">
                    <img id="product-image" src={this.state.console.img} alt="Product Image" />
                  </div>
                </div>
                <div className='col-12 col-md-9'>
                  <div className='card-body'>
                    <h6 id='product-description' >Name: </h6>
                    <p className='card-text'>{this.state.console.name}</p>
                    <h6 id='product-description' >Description: </h6>
                    <p className='card-text'>{this.state.console.description}</p>
                    <h6 id='product-description' >Storage: </h6>
                    <p className='card-text'>{this.state.console.storage}</p>
                    <h6 id='product-specification'>Price: €</h6>
                    <p className='card-text'>{this.state.console.price}</p>
                    <Button href='/consoles' variant="success">Back to All Consoles</Button>
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
    fetch(urlToCurrentDomain(`${Config.consolesAPI}/${this.props.consoleID}`))
      .then(res => res.json())
      .then(json => {
        this.setState({ console: json });
        this.setState({ consoleLoaded: true });
      })
      .catch(err => {
        this.setState({ consoleLoaded: true });
      });
  }

}

export default Console;
