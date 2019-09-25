import React, { Component } from 'react'
import { Button } from "antd";

export default class CartSample extends Component {

  constructor(props) {
    // 初始化数据一般都放在构造函数里面
    super(props)
    this.state = {
      goods: [
        {
          id: 1, name: 'web全栈架构师'
        },
        {
          id: 2, name: 'python全栈架构师'
        }
      ],
      text: "",
      cart: []
    }
  }

  textChange = (e) => {
    this.setState({ text: e.target.value })
  }

  addGood = () => {
    this.setState(prevState => {
      return {
        goods: [...prevState.goods, {
          id: prevState.goods.length + 1,
          name: prevState.text
        }]
      }
    })
  }

  addCart = (good) => {
    //创建新购物车
    const newCart = [...this.state.cart]
    const index = newCart.findIndex(c => c.id === good.id)
    const item = newCart[index]
    if (item) {
      newCart.splice(index, 1, { ...item, count: item.count + 1 })
    }
    else {
      newCart.push({ ...good, count: 1 })
    }

    //更新
    this.setState({ cart: newCart })
  }

  add = (good) => {
    this.calculate(good, 'add')
  }

  minus = (good) => {
    this.calculate(good, 'minus')
  }

  calculate = (good, type) => {
    const newCart = [...this.state.cart]
    const index = newCart.findIndex(c => c.id === good.id)
    const item = newCart[index]

    if (type === 'add') {
      newCart.splice(index, 1, { ...item, count: item.count + 1 })
    }
    else {
      newCart.splice(index, 1, { ...item, count: item.count - 1 })
    }

    //更新
    this.setState({ cart: newCart })
  }
  render() {
    return (
      <div>
        {/* 条件渲染 */}
        {this.props.title && <h1>this.props.title</h1>}

        {/* 列表渲染 */}
        <div>
          <input type="text" value={this.state.text} onChange={this.textChange} />
          <Button type="primary" onClick={this.addGood}>
            添加商品
          </Button>
        </div>
        <ul>
          {this.state.goods.map(good => (
            <li key={good.id}>
              {good.name}
              <Button type="primary" onClick={() => this.addCart(good)}>
                加购
              </Button>
            </li>
          ))}
        </ul>

        <Cart data={this.state.cart} add={this.add} minus={this.minus} />
      </div>
    );
  }
}

// 参数需要解构
function Cart({ data, add, minus }) {
  return (
    <table>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>
              <Button onClick={() => minus(item)}>-</Button>
              {item.count}
              <Button onClick={() => add(item)}>+</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

