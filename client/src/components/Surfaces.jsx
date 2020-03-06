import React from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import { Link } from '@reach/router';
import * as Config from '../config.json';
import { GridList } from '@material-ui/core';
import { GridListTile, classes } from '@material-ui/core';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import surface from './images/shop-surface-slider.jpg';

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
          <Card className="bg-dark text-white">
            <Card.Img img src={surface} alt="Shop Surface" />
            <Card.ImgOverlay>
            <br></br><br></br><br></br><br></br><br></br><br></br>
              <Card.Title id="shop-surface">Shop the</Card.Title>
              <Card.Title id="shop-surface">Surface Range</Card.Title>
              <Card.Text>
                Explore Versatile Laptop Designs & Stand Out with the Newest Surface Computers.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>

          <GridList cellHeight={500} className={GridList.gridList} cols={4}>
            {this.state.surfaces.map(surface => (
              <GridListTile key={`surface_${surface._id}`}> cols={surface.cols || 1}>
                <Row id="product-card">
                  <div class="container-fluid">
                    <div className='card mb-4'>
                      <center>
                        <img id="product-list-image" src={surface.img} alt="Product Image" />
                      </center>
                      <Link to={`/surface/${surface._id}`} id="product-list-title" >{surface.name}</Link>
                      <p id="product-list-description" to={`/surface/${surface._id}`} className='card-text' >Storage: {surface.storage} | Memory: {surface.memory}</p>
                    </div>
                  </div>
                </Row>
              </GridListTile>
            ))}
          </GridList>
          <center>
          <Button href='/surfaces/add-surface'>Add a new Surface</Button>
          </center>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(Config.surfacesAPI))
      .then(res => res.json())
      .then(json => {
        this.setState({ surfaces: json });
        this.setState({ surfacesLoaded: true });
      })
      .catch(err => {
        this.setState({ surfacesLoaded: true });
      });
  }

}

export default Surfaces;

