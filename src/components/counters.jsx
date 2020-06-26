import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onDelete, onIncrement, counters } = this.props;
    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-primary m-2 sm">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            counter={counter}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
