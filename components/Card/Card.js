import React from 'react';
import Constants from '../../global_constants/Constants';
import 'style.css';


export default class Card extends Component {

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