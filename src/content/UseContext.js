//context可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树
//为当前的theme创建一个context ("light"为默认值)
import React from "react";
import { Button } from "antd";

const ThemeContext = React.createContext("light");

export default class App extends React.Component {
  render() {
    //使用一个Provider来将当前的theme传递给以下的组件树
    //无论多深，任何组件都能读取这个值
    //在这个例子中，我们将"dark"作为当前值传递下去
    return (
      <ThemeContext.Provider value="primary">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// 中间的组件再也不必指明往下传递 theme了。
function Toolbar() {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

class ThemeButton extends React.Component {
  //指定contextType读取当前的 theme context
  //React 会往上找到最近的 theme provider ,然后使用它的值
  //在这个例子中，当前的 theme为 “dark"
  static contextType = ThemeContext;
  render() {
    return <Button type={this.context}></Button>;
  }
}
