import React from 'react';
import Constants from '../../global_constants/Constants';
import 'style.css';

export default class NavBar extends Component {
	
	render() {
		// placeholder
		let links = ["Home", "Project", "Human Practices", "Safety", "People", "Judging"];

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
	special: dark background if true
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

class Card extends Component {

	constructor(props) {
		super(props);
		this.state ={
			hover: false
		};
	}

	render() {
		return (
			<div className="card">
				<div className="card-title">
				</div>
				<div className="card-body">
				</div>
				<div className="card-actions">
				</div>
			</div>
		)
	}
}