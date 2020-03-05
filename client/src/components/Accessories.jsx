import React from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import { Link } from '@reach/router';
import * as Config from '../config.json'
import { GridList } from '@material-ui/core';
import { GridListTile } from '@material-ui/core';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import accessory from './images-resized/shop-accessories-slider.jpg';
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
          <Card className="bg-dark text-white">
            <Card.Img img src={accessory} alt="Shop Accessory" />
            <Card.ImgOverlay>
            <br></br><br></br><br></br><br></br><br></br><br></br>
              <Card.Title id="shop-surface">Shop all</Card.Title>
              <Card.Title id="shop-surface">Accessories</Card.Title>
              <Card.Text>
                Specifically Designed for Surface, Why Not Add An Accessory Or Two. Stand Out with the Newest Surface Computers & Accesories.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>

          <GridList cellHeight={500} className={GridList.gridList} cols={4}>
          {this.state.accessories.map(accessory => (
              <GridListTile key={`accessory_${accessory._id}`}>> cols={accessory.cols || 1}>
                <Row id="product-card">
                  <div class="container-fluid">
                    <div className='card mb-4'>
                      <center>
                        <img id="product-list-image" src={accessory.img} alt="Product Image" />
                      </center>
                      <Link to={`/accessory/${accessory._id}`} id="product-list-title" >{accessory.name}</Link>
                      <p id="product-list-description" to={`/accessory/${accessory._id}`} className='card-text' >Colour: {accessory.colour}</p>
                    </div>
                  </div>
                </Row>
              </GridListTile>
            ))}
          </GridList>

          <p><Link to='/accessories/add-accessory'>Add a new Accessory</Link></p>
        </div>



        /*
        <div>
          <h1 id="product-list-header">Accessories</h1>
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
        */
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