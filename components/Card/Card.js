import React from 'react';
import Constants from '../../global_constants/Constants';
import 'style.css';

/**
 * @returns {React.Component}
 */
const NavigationBar = () => {
	return <></>
}


/*
props:
	title
	bodyText
	link
*/
export class Card extends Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className='card-whole'>
				<CardTitle title={this.props.title} />
				<CardBody bodyText={this.props.bodyText} />
				<LearnMoreButton link={this.props.link} />
			</div>
		)
	}
}


/*
props:
	title
*/
class CardTitle extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='card-title'>
				<h2>
					{this.props.title}
				</h2>
			</div>
		)
	}
}

/*
props:
	bodyText
*/
class CardBody extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='card-body'>
				<p>
					{this.props.bodyText}
				</p>
			</div>
		)
	}
}


/*
props:
	link
*/
class LearnMoreButton extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className='learn-button'>
				<a href={this.props.link}>Learn More</a>
			</div>
		)
	}
}