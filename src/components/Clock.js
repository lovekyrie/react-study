import React, { Component } from 'react'

export default class Clock extends Component {

  constructor(props) {
    super(props);
    console.log("Clock constructed");
    this.state = {
      date: new Date()
    }
  }


  componentDidMount() {
    console.log('Clock did mount')
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log('Clock will unmount')
    clearInterval(this.timer)
  }

  componentDidUpdate(){
    console.log('Clock did update')
  }

  tick(){
    this.setState({ date: new Date() })
  }
  
  render() {
    return (
      <div>
        {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}
