import React, { PureComponent } from "react";
import "./SnapshotSample.css";

interface Iprops {
  messages?: string;
}

export default class SnapshotSample extends PureComponent {
  state = {
    messages: [],
  };
  rootNode: any;
  interval: NodeJS.Timer;

  handleNewMessage() {
    this.setState((prev: Iprops) => ({
      messages: [`msg ${prev.messages.length}`, ...prev.messages],
    }));
  }

  componentDidMount() {
    for (let i = 0; i < 20; i++) this.handleNewMessage();
    this.interval = setInterval(() => {
      if (this.state.messages.length > 200) {
        clearInterval(this.interval);
        return;
      }
      this.handleNewMessage();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getSnapshotBeforeUpdate() {
    return this.rootNode.scrollHeight;
  }

  render() {
    return (
      <div className="snapshot-sample" ref={(n) => (this.rootNode = n)}>
        {this.state.messages.map((msg) => (
          <div key={msg}>{msg}</div>
        ))}
      </div>
    );
  }
}
