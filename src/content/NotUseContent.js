import React from "react"

class App extends React.Component{
  render(){
    return <Toolbar theme="dark" />
  }
}

function Toolbar(props){
  //Toolbar需要接受一个额外的“theme”属性，用来传递给ThemeButton组件
  //如果应用中每一个单独的按钮都需要知道theme的值，这会是件很麻烦的事
  //因为必须将这个值层层传递所有组件
  return (
    <div>
      <ThemeButton theme={props.theme} />
    </div>
  )
}

class ThemeButton extends React.Component{
  render(){
    return <Button theme={this.props.theme}></Button>
  }
}