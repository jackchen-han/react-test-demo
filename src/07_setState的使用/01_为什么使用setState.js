import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      counter:0
    }
  }
  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e=>{this.increment()}}>+1</button>
        <button onClick={this.test}>检测this</button>
        <button onClick={this.test1.bind(this)}>bind后检测this</button>
      </div>
    )
  }
  increment(){
    // 执行这个函数会通知react来响应式的修改
    this.setState({
      counter : this.state.counter + 1
    })
  }
  test(){
    console.log(this)
  }
  test1(){
    console.log(this)
  }
}
