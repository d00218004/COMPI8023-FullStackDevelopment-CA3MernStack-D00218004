import React    from 'react';
import logo     from './images/logo.png';

class Footer extends React.Component {

  render() {
    return (
      <div class="clearfix" className='jumbotron' id="footer">
        <h6 id="footer-text">Copyright &copy; - All Rights Reserved</h6>
        <img id="footer-logo" src={logo} alt="Microaoft"/>
      </div>
    );
  }

}

export default Footer;