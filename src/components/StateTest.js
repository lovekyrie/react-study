import React, { Component } from "react";

export default class StateTest extends Component {
  state = {
    counter: 1,
  };

  componentDidMount() {
    //请不要直接修改状态
    //1. this.state.counter +=1

    //2.批量执行
    // this.setState(data,cb)
    // this.setState(fn,cb)
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });

    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });

    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  }

  render() {
    return <div>{this.state.counter}</div>;
  }
}
