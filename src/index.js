import React from "react";
import { render } from "react-dom";
import "./index.css";

import Clock from "./components/Clock";
import CartSample from "./components/CartSample";
import RouterSample from "./components/RouterSample";
import CommentList from "./components/CommentList";
import Composition from "./components/Composition";
import Hoc from "./components/Hoc";
import StateTest from "./components/StateTest";
import AntdTest from "./components/AntdTest";
import SnapshotSample from "./lifecycle/SnapshotSample.tsx";
import chatApp from "./chat/chatApp";
import UseContext from "./content/UseContext";
import HookTest from "./hook/HookTest";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  paddingLeft: "250px",
};

const routeMap = {
  clock: Clock,
  chat: chatApp,
  "cart-sample": CartSample,
  "router-sample": RouterSample,
  "comment-list": CommentList,
  composition: Composition,
  hoc: Hoc,
  "state-test": StateTest,
  "antd-test": AntdTest,
  "snapshot-sample": SnapshotSample,
  "use-context": UseContext,
  "hook-test": HookTest,
};

class App extends React.PureComponent {
  handleLinkClick = (key) => {
    // window.location.hash = `#${key}`;
    window.history.pushState(null, "", `/#/${key}`);
    this.forceUpdate();
  };
  render() {
    const currentPage = document.location.hash.replace(/#\/?/, "");

    let CurrentPage = routeMap[currentPage] || Hello;
    return (
      <div style={styles}>
        <ul className="menu-list">
          {Object.keys(routeMap).map((key) => (
            <li key={key} className={key === currentPage ? "is-active" : ""} style={{ listStyle: "none" }}>
              <button className="link" onClick={() => this.handleLinkClick(key)} onKeyDown={() => this.handleLinkClick(key)}>
                {key}
              </button>
            </li>
          ))}
        </ul>
        <div style={{ padding: "30px 0" }}>
          <CurrentPage />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
