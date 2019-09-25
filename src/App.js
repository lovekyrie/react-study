import React from 'react';
import './App.css';
import {Welcome1,Welcome2} from "./components/CompType"
// import Clock from "./components/Clock"
import StateTest from "./components/StateTest"
import CartSample from "./components/CartSample"
import AntdTest from "./components/AntdTest"
import CommentList from './components/CommentList';
import Hoc from './components/Hoc';
import Composition from './components/Composition';
import RouterSample from './components/RouterSample';

function formatName(user){
  return `${user.firstName} ${user.lastName}`
}

function App() {
  const name='jerry'
  const user={firstName:'kevin',lastName:'durant'}
  const jsx=<p>hello,react</p>
  return (
    <div className="App">
      {/* 注释方式 */}
     {/* <h1>{name}</h1> */}
     {/* <h1>{formatName(user)}</h1> */}
     {/* {jsx} */}

    {/* 使用其他组件 */}
    {/* <Welcome1 name="some content"></Welcome1> */}
    {/* <Welcome2 name="some content"></Welcome2> */}

    {/* state 和setState状态改变 */}
    {/* <Clock></Clock> */}

    {/* <StateTest></StateTest> */}
    {/* <CartSample></CartSample> */}

    {/* <AntdTest></AntdTest> */}

    {/* <CommentList></CommentList> */}

    {/* 高阶组件 */}
    <Hoc></Hoc>

    {/* 复合组件 函数作为子组件 */}
    <Composition></Composition>

    {/* 简单router */}
    <RouterSample></RouterSample>
    </div>
  );
}

export default App;
