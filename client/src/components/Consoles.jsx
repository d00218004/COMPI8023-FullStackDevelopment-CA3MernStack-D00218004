import React from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import { Link } from '@reach/router';
import * as Config from '../config.json';
import { GridList } from '@material-ui/core';
import { GridListTile, classes } from '@material-ui/core';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import console from './images/shop-xbox-slider.jpg';

class Consoles extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.consoles && this.state.consolesLoaded === true) {
      return (
        <p>Error loading Consoles. Try again later.</p>
      );
    } else if (!this.state.consoles) {
      return (
        <p>Loading Consoles...</p>
      );
    } else if (this.state.consoles.length === 0) {
      return (
        <p>Sorry, no Consoles are available</p>
      );
    } else {
      return (
        <div>
          <Card className="bg-dark text-white">
            <Card.Img img src={console} alt="Shop Consoles" />
            <Card.ImgOverlay>
            <br></br><br></br><br></br><br></br><br></br><br></br>
              <Card.Title id="shop-console">Shop the</Card.Title>
              <Card.Title id="shop-console">Console Range</Card.Title>
              <Card.Text id="shop-console-description">
                Explore Versatile Laptop Designs & Stand Out with the Newest Surface Computers.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>

          <GridList cellHeight={500} className={GridList.gridList} cols={4}>
            {this.state.consoles.map(console => (
              <GridListTile key={`console_${console._id}`}> cols={console.cols || 1}>
                <Row id="product-card">
                  <div class="container-fluid">
                    <div className='card mb-4'>
                      <center>
                        <img id="product-list-image" src={console.img} alt="Product Image" />
                      </center>
                      <Link to={`/console/${console._id}`} id="product-list-title" >{console.name}</Link>
                      <p id="product-list-description" to={`/console/${console._id}`} className='card-text' >Storage: {console.storage} | Colour: {console.colour}</p>
                    </div>
                  </div>
                </Row>
              </GridListTile>
            ))}
          </GridList>

          <p><Link to='/consoles/add-console'>Add a new Console</Link></p>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(Config.consolesAPI))
      .then(res => res.json())
      .then(json => {
        this.setState({ consoles: json });
        this.setState({ sconsolesLoaded: true });
      })
      .catch(err => {
        this.setState({ consolesLoaded: true });
      });
  }

}

export default Consoles;

