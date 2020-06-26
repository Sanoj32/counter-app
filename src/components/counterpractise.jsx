import React, { Component } from "react";

class Counterpractise extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    counters[0] = {...counter}
    counters[0].value++;

    console.log(this.state.counters);
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleIncrement}>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counterpractise;
