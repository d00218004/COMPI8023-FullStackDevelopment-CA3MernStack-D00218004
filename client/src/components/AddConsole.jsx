import React              from 'react';
import {navigate, Link}   from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'

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
          <h1>Add a Console</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>

            <div>
              <label>Image ( URL ):
                <input type='' value={this.state.Img} onChange={this.handleImgUpdate.bind(this)} />
              </label>
              <label>Name:
                <input type='' value={this.state.name} onChange={this.handleNameUpdate.bind(this)} />
              </label>
              <label>Description:
                <input type='' value={this.state.description} onChange={this.handleDescriptionUpdate.bind(this)} />
              </label>
              <label>Storage:
                <input type='' value={this.state.storage} onChange={this.handleStorageUpdate.bind(this)} />
              </label>
              <label>Price:
                <input type='' value={this.state.price} onChange={this.handlePriceUpdate.bind(this)} />
              </label>
            </div>
            

            {/* <div>
              <label>Console Content:
                <textarea value={this.state.content} onChange={this.handleContentUpdate.bind(this)}></textarea>
              </label>
            </div> */}

            <div>
              <input type='submit' value='Add Console' />
            </div>

          </form>
          <Link to='/consoles'>Back to All Consoles</Link>
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
