import React, { Component } from 'react'

class Childcpn extends Component{
  // 可以直接不写进去
  // constructor(props){
  //   // 每次都要实现constructor才能得到props
  //   // 直接把props定义到父类里面
  //   super(props)
  //   // this.props = props
  // }
  render(){
    console.log('this.props的值：',this.props)
    // 通过原型链来调用父类的元素
    const {name, age, height} = this.props
    return (
       <div>
      <h2>子组件展示数据：{name+" " + age+ " " + height}</h2>
    </div>
    )
   
  }
}
export default class App extends Component {

  render() {
    return (
      <div>
        <Childcpn name="why" age="18" height="1.88"/>
        <Childcpn name="kobe" age="33" height="1.98"/>
      </div>
    )
  }
}
