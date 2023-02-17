import React from "react";

class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      count2: 1,
    };
  }
  render() {
    return (
      <React.Fragment>
        <h1>This is a class compomponent</h1>
        <p>{this.props?.name}</p>
        <button
          onClick={() => {
            // DO NOT MUTATE STATE VARIABLES DIRECTLY
            this.setState({ count: count++, count2: count2++ });
          }}
        >
          Add number
        </button>
      </React.Fragment>
    );
  }
}
