import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import WalletContainer from './containers/walletContainer'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      sushisIndex: 0,
      sushisList: [],
      eatenList: [],
      balance: 100
    }
  }

  changePage = () => {
    this.setState({
      sushisIndex: this.state.sushisIndex + 4
    });
  }

  addToEatenList = (sushi) => {
    if (this.state.balance >= sushi.price && !this.state.eatenList.includes(sushi)) {
      this.setState({
        eatenList: [...this.state.eatenList, sushi],
        balance: this.state.balance - sushi.price
      })
    } 
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => {
        this.setState({
          sushisList: sushis
        })
      })
  }

  updateBalance = (e) => {
    e.preventDefault()
    this.setState({
      balance: this.state.balance + parseInt(e.target.cash.value)
    });
    e.target.reset()
 }

  render() {
    const sushisToRender = this.state.sushisList.slice(
      this.state.sushisIndex,
      this.state.sushisIndex + 4
    );

    return (
      <div className="app">
        <SushiContainer
          changePage={this.changePage}
          sushis={sushisToRender}
          eatSushi={this.addToEatenList}
          plates={this.state.eatenList}
        />
        <Table
          plates={this.state.eatenList}
          balance={this.state.balance}
        />
        <WalletContainer
          balance={this.state.balance}
          updateBalance={this.updateBalance}
        />
      </div>
    );
  }
}

export default App;