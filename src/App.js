import "./App.css";
import { Button } from "antd";
import React from "react";
// import "antd/dist/antd.css";

const actions = {
  init(initialValue) {
    return { value: initialValue };
  },
  increment(prevState) {
    return { value: prevState.value + 1 };
  },
  decrement(prevState) {
    return { value: prevState.value - 1 };
  },
};

class Counter1 extends React.Component {
  state = actions.init(this.props.initialValue);

  state = {
    value: this.props.initialValue,
  };

  // onClick = () => {
  //   const value = this.state.value + 1;
  //   this.setState({ value });
  // };

  render() {
    const { value } = this.state;
    return (
      <div>
        Counter1: {value}
        <Button onClick={() => this.setState(actions.increment)}>+1</Button>
        <Button onClick={() => this.setState(actions.decrement)}>-1</Button>
      </div>
    );
  }
}

function App() {
  return (
    // <div>
    //   <button>Hello, React...</button>
    //   <Button type="primary" onClick={() => console.log("clicked")}>
    //     hello, Antd.
    //   </Button>
    // </div>

    <div>
      <Counter1 initialValue={10} />
    </div>
  );
}

export default App;
