import React, { Component } from 'react'

export default class Hoc extends Component {
  render() {
    return (
      <div>
        <NewKaikaba stage="react" />        
      </div>
    )
  }
}

function Kaikeba(props){
  return (
    <div>
      {props.stage}-{props.name}
    </div>
  )
}

const withKaikeba = Comp=>{
  //获取name
  const name='高阶组件'
  return props=> <Comp {...props} name={name} />
}

const NewKaikaba=withKaikeba(Kaikeba)
