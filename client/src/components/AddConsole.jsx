import React              from 'react';
import {navigate, Link}   from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
class AddConsole extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {
    img         : '',
    name        : '',
    description : '',
    storage     : '',
    price       : ''
  }

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (this.state.reportedError) {
      return (
        <div>
          <h1>Error</h1>
          <p>Sorry, there was an error creating the Console. The error was: {this.state.reportedError || 'Unknown'}</p>
          <a href='localhost:3000' onClick={this.resetForRetry.bind(this)}>Try again</a>&nbsp;|&nbsp;
          <Link to='/consoles'>Back to All Consoles</Link>
        </div>
      );
    } else if (this.state.processingAdd) {
      return (
        <div>Adding Console...</div>
      );
    } else {
      return (
        <div>
        <center>
          <Card id="product-card" style={{ width: '50rem' }}>
            <Card.Body>
              <h2>Add a Console</h2>
              <br></br><br></br>
              <form onSubmit={this.handleSubmit.bind(this)}>
              <Card.Text>
                <label className='col-12'>Image ( URL ):
                <div>
                <input id="input-box" type='' value={this.state.Img} onChange={this.handleImgUpdate.bind(this)} />
                </div>
                </label>
                <label className='col-12 col-md-9'>Name:
                <div>
                <input id="input-box" type='' value={this.state.name} onChange={this.handleNameUpdate.bind(this)} />
                </div>
                </label>
                <label className='col-12 col-md-9'>Description:
                <div>
                <input id="input-box" type='' value={this.state.description} onChange={this.handleDescriptionUpdate.bind(this)} />
                </div>
                </label>
                <label className='col-12 col-md-9'>Storage:
                <div>
                <input id="input-box" type='' value={this.state.storage} onChange={this.handleStorageUpdate.bind(this)} />
                </div>
                </label>
                <label className='col-12 col-md-9'>Price:
                <div>
                €<input id="input-box" type='' value={this.state.price} onChange={this.handlePriceUpdate.bind(this)}/>
                </div>
                </label>
                <div>
                  <input type='submit' value='Add Console' />
                </div>
              </Card.Text>
              </form>
              <br></br>
              <Button href='/consoles' variant="success">Back to All Consoles</Button>
            </Card.Body>
          </Card>
          </center>

              {/* <div>
              <label>Accessory Content:
                <textarea value={this.state.content} onChange={this.handleContentUpdate.bind(this)}></textarea>
              </label>
            </div> */}

        </div>
      );
    }
  }

  handleImgUpdate(e) {
    this.setState({img: e.target.value || null});
  }
  handleNameUpdate(e) {
    this.setState({name: e.target.value || null});
  }
  handleDescriptionUpdate(e) {
    this.setState({description: e.target.value || null});
  }
  handleStorageUpdate(e) {
    this.setState({storage: e.target.value || null});
  }
  handlePriceUpdate(e) {
    this.setState({price: e.target.value || null});
  }
  /*
  handleContentUpdate(e) {
    this.setState({content: e.target.value || null});
  }
  */
  handleSubmit(e) {

    // Prevent the default form submit action
    e.preventDefault();

    // Perform a POST call for the new data
    fetch(urlToCurrentDomain(`${Config.consolesAPI}`), {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        img         : this.state.img,
        name        : this.state.name,
        description : this.state.description,
        storage     : this.state.storage,
        price       : this.state.price
      })}
    )
      .then (res  => {
        if (res.status >= 400) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then (json => navigate(`/console/${json._id}`))
      .catch(err => {
        this.setState({reportedError: err.message || 'Unknown'});
      })

  }

  resetForRetry() {
    this.setState({reportedError: null});
  }

  componentDidMount() {
    // this.getComments(this.props.consoleID);
  }

}

export default AddConsole;
