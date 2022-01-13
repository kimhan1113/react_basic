import "./App.css";
import { Button } from "antd";
import React from "react";
import PropTypes from "prop-types";
import ThemedButton from "./ThemedButton";
// import "antd/dist/antd.css";

class PostDetail extends React.Component {
  static propTypes = {
    postId: PropTypes.number.isRequired,
  };

  render() {
    const { postId } = this.props;
    return (
      <div>
        포스팅 #{postId}
        <hr />
        포스팅 내용 ....
      </div>
    );
  }
}

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

class App extends React.Component {
  state = {
    postId: 1,
  };
  render() {
    return (
      <div>
        <ThemedButton theme="success" label="say helo" />
        <PostDetail postId={10} />
        <Counter1 initialValue={10} />
      </div>
    );
  }
}

// function App() {
//   state = {
//     postId:1
//   }

//   return (
//     <div>
//       <PostDetail postId={10} />
//       <Counter1 initialValue={10} />
//     </div>
//   );
// }

export default App;
