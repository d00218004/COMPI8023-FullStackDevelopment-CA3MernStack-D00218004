import React              from 'react';
import {navigate, Link}   from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'

class AddAccessory extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {
    img     : '',
    name     : '',
    description     : '',
    colour     : '',
    price     : ''
  }

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (this.state.reportedError) {
      return (
        <div>
          <h1>Error</h1>
          <p>Sorry, there was an error creating the Accessory. The error was: {this.state.reportedError || 'Unknown'}</p>
          <a href='localhost:3000' onClick={this.resetForRetry.bind(this)}>Try again</a>&nbsp;|&nbsp;
          <Link to='/'>Back to All Accessories</Link>
        </div>
      );
    } else if (this.state.processingAdd) {
      return (
        <div>Adding Accessory...</div>
      );
    } else {
      return (
        <div>
          <h1>Add a Accessory</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>

            <div>
              <label>Accessory Image:
                <input type='' value={this.state.img} onChange={this.handleNameUpdate.bind(this)} />
              </label>
              <label>Accessory Name:
                <input type='' value={this.state.name} onChange={this.handleMemoryUpdate.bind(this)} />
              </label>
              <label>Accessory Description:
                <input type='' value={this.state.description} onChange={this.handleColourUpdate.bind(this)} />
              </label>
              <label>Accessory Colour:
                <input type='' value={this.state.colour} onChange={this.handlePriceUpdate.bind(this)} />
              </label>
              <label>Accessory Price:
                <input type='' value={this.state.price} onChange={this.handlePriceUpdate.bind(this)} />
              </label>
            </div>
            

            {/* <div>
              <label>Accessory Content:
                <textarea value={this.state.content} onChange={this.handleContentUpdate.bind(this)}></textarea>
              </label>
            </div> */}

            <div>
              <input type='submit' value='Add Accessory' />
            </div>

          </form>
          <Link to='/'>Back to All Accessories</Link>
        </div>
      );
    }
  }

  handleNameUpdate(e) {
    this.setState({name: e.target.value || null});
  }
  handleMemoryUpdate(e) {
    this.setState({memory: e.target.value || null});
  }
  handleColourUpdate(e) {
    this.setState({colour: e.target.value || null});
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
    fetch(urlToCurrentDomain(`${Config.surfacesAPI}`), {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        img      : this.state.img,
        name    : this.state.name,
        description    : this.state.description,
        colour     : this.state.colour,
        price     : this.state.price
      })}
    )
      .then (res  => {
        if (res.status >= 400) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then (json => navigate(`/accessory/${json._id}`))
      .catch(err => {
        this.setState({reportedError: err.message || 'Unknown'});
      })

  }

  resetForRetry() {
    this.setState({reportedError: null});
  }

  componentDidMount() {
    // this.getComments(this.props.accessoryID);
  }

}

export default AddAccessory;
