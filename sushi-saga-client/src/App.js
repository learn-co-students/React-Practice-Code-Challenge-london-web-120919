import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      sushis: [],
      sushiIndex: 0
    }
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(json => this.setState({
        sushis: json
      }))
  }

  increaseSushiIndex = () => {
    this.setState({
      sushiIndex: this.state.sushiIndex + 4
    })
  }


  getNext4sushis() {
    return this.state.sushis.slice(this.state.sushiIndex, this.state.sushiIndex+4);
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.getNext4sushis()} i=={this.increaseSushiIndex}/>
        <Table />
      </div>
    );
  }
}

export default App;