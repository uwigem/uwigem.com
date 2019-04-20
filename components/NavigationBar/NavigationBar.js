import React from 'react';
import Constants from '../../global_constants/Constants';
import 'style.css';

export default class NavBar extends Component {
  
  render() {
    // placeholder
    let links = ["Link1", "Link2", "Link3", "Link4"];

    links = links.map((link) => {
      return (
        <Link link="#" name={link} />
      );
    })

    return (
      <div className="navbar">
        <div className="navbar-logo-container">
          
        </div>
        <div className="navbar-link-container">
          {links}
        </div>
      </div>
    )
  }
}

/*
props:
  link: link/react-router address
  name: display name of the link
*/
class Link extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  render() {
    return (
      <div className="navlink-container">
        <a className="navlink" ref={this.props.link}>{this.props.name}</a>
      </div>
    );
  }
}