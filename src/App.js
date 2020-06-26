import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    total: 0,
  };

  constructor() {
    super();
    console.log("App- constructor");
  }
  handleTotal = () => {
    let total = 0;
    this.state.counters.map((counter) => {
      total += counter.value;
    });
    console.log(total);
    this.setState({ total });
    console.log(this.state.total);
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };

  handleReset = () => {
    const countersR = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: countersR, total: 0 });
  };

  handleDelete = (counterId) => {
    const filtered = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: filtered });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          counters={this.state.counters}
          onTotal={this.handleTotal}
          total={this.state.total}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
