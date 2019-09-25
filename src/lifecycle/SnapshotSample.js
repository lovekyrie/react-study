import React, { PureComponent } from "react";
import "./SnapshotSample.css";

export default class SnapshotSample extends PureComponent {
  state = {
    messages: []
  };

  handleNewMessage() {
    this.setState(prev => ({
      messages: [`msg ${prev.messages.length}`, ...prev.messages]
    }));
  }

  componentDidMount() {
    for (let i = 0; i < 20; i++) this.handleNewMessage();
    this.interval = setInterval(() => {
      if (this.state.messages.length > 200) {
        clearInterval(this.interval);
        return;
      }
      this.handleNewMessage()
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
      <div className="snapshot-sample" ref={n => (this.rootNode = n)}>
        {this.state.messages.map(msg => (
          <div>{msg}</div>
        ))}
      </div>
    );
  }
}
