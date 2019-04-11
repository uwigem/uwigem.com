import React from 'react';
import Constants from '../../global_constants/Constants';
import 'style.css';

/**
 * @returns {React.Component}
 */
const NavigationBar = () => {
	return <></>
}

export class NavBar extends Component {
	
	render() {

		return (
			<div className="nav-box">
				<img src="logo.png" height="30" width="30px" />
				<Link name="PROJECTS" link="#"/>
				<Link name="ABOUT" link="#"/>
				<Link name="GET INVOLVED" link="#"/>
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
			<div className="nav-link">
				<a ref={this.props.link}>{this.props.name}</a>
			</div>
		);
	}
}

export default NavigationBar