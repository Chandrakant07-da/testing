import React from 'react';

class Counter extends React.Component {
  state = {
    addValue: 0
  };
  increment = () => {
    this.setState({ ...this.state, addValue: this.state.addValue + 1 });
  };
  decrement = () => {
    this.setState({ ...this.state, addValue: this.state.addValue - 1 });
  };
  render() {
    return (
      <div>
        <button className="increment" onClick={this.increment}>INCREMENT</button>
        <button className="decrement" onClick={this.decrement}>DECREMENT</button>
        <h1>Value : {this.state.addValue}</h1>
      </div>
    );
  }
}

export default Counter;