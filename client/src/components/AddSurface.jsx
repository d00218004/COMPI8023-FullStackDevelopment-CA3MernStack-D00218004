import React              from 'react';
import {navigate, Link}   from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'

class AddSurface extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {
    name     : '',
    memory     : '',
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
          <p>Sorry, there was an error creating the Surface. The error was: {this.state.reportedError || 'Unknown'}</p>
          <a href='localhost:3000' onClick={this.resetForRetry.bind(this)}>Try again</a>&nbsp;|&nbsp;
          <Link to='/surfaces'>Back to All Surfaces</Link>
        </div>
      );
    } else if (this.state.processingAdd) {
      return (
        <div>Adding Surface...</div>
      );
    } else {
      return (
        <div>
          <h1>Add a Surface</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>

            <div>
              <label>Surface Name:
                <input type='' value={this.state.name} onChange={this.handleNameUpdate.bind(this)} />
              </label>
              <label>Surface Memory:
                <input type='' value={this.state.memory} onChange={this.handleMemoryUpdate.bind(this)} />
              </label>
              <label>Surface Colour:
                <input type='' value={this.state.colour} onChange={this.handleColourUpdate.bind(this)} />
              </label>
              <label>Surface Price:
                <input type='' value={this.state.price} onChange={this.handlePriceUpdate.bind(this)} />
              </label>
            </div>
            

            {/* <div>
              <label>Surface Content:
                <textarea value={this.state.content} onChange={this.handleContentUpdate.bind(this)}></textarea>
              </label>
            </div> */}

            <div>
              <input type='submit' value='Add Surface' />
            </div>

          </form>
          <Link to='/surfaces'>Back to All Surfaces</Link>
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
        name      : this.state.name,
        memory    : this.state.memory,
        colour    : this.state.colour,
        price     : this.state.price
      })}
    )
      .then (res  => {
        if (res.status >= 400) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then (json => navigate(`/surface/${json._id}`))
      .catch(err => {
        this.setState({reportedError: err.message || 'Unknown'});
      })

  }

  resetForRetry() {
    this.setState({reportedError: null});
  }

  componentDidMount() {
    // this.getComments(this.props.surfaceID);
  }

}

export default AddSurface;
