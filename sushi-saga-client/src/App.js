import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = 'http://localhost:3000/sushis';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sushiArray: [],
			splicedArray: [],
			eatenArray: [],
			budget: 200
		};
	}

	componentDidMount() {
		this.setSushiArray();
	}
	setSushiArray = () => {
		fetch(API)
			.then(res => res.json())
			.then(data =>
				this.setState({
					sushiArray: data
				})
			)
			.then(this.spliceArray);
	};

	spliceArray = () => {
		this.setState({
			splicedArray: this.state.sushiArray.splice(0, 4)
		});
	};

	eatSushi = sushiID => {
		if (this.state.budget >= this.state.splicedArray[sushiID].price) {
			let array = this.state.eatenArray.concat(
				this.state.splicedArray[sushiID]
			);
			this.setState({
				eatenArray: array,
				budget: this.state.budget - this.state.splicedArray[sushiID].price
			});
		} else {
			this.setState({
				budget: 'NOTHING!!!'
			});
		}
	};

	render() {
		return (
			<div className='app'>
				<SushiContainer
					sushiArray={this.state.splicedArray}
					moreSushi={this.spliceArray}
					eatSushi={this.eatSushi}
					eatenArray={this.state.eatenArray}
				/>
				<Table eatenArray={this.state.eatenArray} budget={this.state.budget} />
			</div>
		);
	}
}

export default App;
