import React, { Component } from "react";
import withTimer from "../components/withTimer"

const styles = {
  color: "#fff"
};

class chatApp extends Component {
  state = {
    messages: [],
    inputMsg: ""
  };

  handleInput = evt => {
    this.setState({
      inputMsg: evt.target.value
    });
  };

  handleSend = () => {
    const text = this.state.inputMsg;
    if (text) {
      const newMessages = [...this.state.messages, text];
      this.setState({
        messages: newMessages,
        inputMsg: ""
      });
    }
  };
  render() {
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <div>
          <input value={this.state.inputMsg} onChange={this.handleInput} />
          <button style={styles} onClick={this.handleSend}>
            send
          </button>
        </div>
        <h2>{this.props.time.toLocaleString()}</h2>
      </div>
    );
  }
}

class MessageList extends React.PureComponent {
  render() {
    return (
      <ul>
        {this.props.messages.map(msg => (
          <li>{msg}</li>
        ))}
      </ul>
    );
  }
}

export default withTimer(chatApp)