import { useReducer } from "react";

interface Data {
  result: number
}

interface Action {
  type: 'add' | 'minus',
  num: number
}

function reducer(state: Data, action: Action): Data {
  switch (action.type) {
    case 'add':
      return { ...state, result: state.result + action.num };
    case 'minus':
      return { ...state, result: state.result - action.num };
    default:
      return state;
  }
}

function App() {
  // 通过对象初始化状态
  // const [res, dispatch] = useReducer(reducer, { result: 0 });
  // 通过函数初始化状态
  const [res, dispatch] = useReducer(reducer, 'zero', (param: string) => { return { result:  param === 'zero' ? 0 : 1 } });
  return (
    <div>
      <p>Result: {res.result}</p>
      <button onClick={() => dispatch({ type: 'add', num: 1 })}>Add</button>
      <button onClick={() => dispatch({ type: 'minus', num: 1 })}>Minus</button>
    </div>
  );
}

export default App;