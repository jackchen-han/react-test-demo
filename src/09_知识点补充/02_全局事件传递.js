import React, { PureComponent } from 'react'
import { EventEmitter } from 'events'

// 事件总线： event bus
const eventBus = new EventEmitter()

class Home extends PureComponent {
  constructor(){
    super()
    this.state={
      message:'Hello'
    }
  }
  componentDidMount(){
    // 订阅消息
    eventBus.addListener("sayHello",this.handleSayHelloListener)
  }
  componentWillUnmount(){
    // 取消订阅
    eventBus.removeListener("sayHello",this.handleSayHelloListener)
  }

  // 这种定义方式下的this指向事件对象
  // handleSayHelloListener(message,num){
  //   console.log(message,num)
  // }

  // 使this指向组件
  handleSayHelloListener = (message)=>{
    console.log(this)
    this.setState({
      message
    })
  }
  render(){
    return (
      <div>
        {this.state.message}

      </div>
    )
  }
}
class Profile extends PureComponent{
  render(){
    return (
      <div>
        Profile
        <button onClick={e=>this.emitEvent()}>点击了Profile按钮</button>
      </div>
    )
  }
  emitEvent(){
    eventBus.emit('sayHello','Hello Home',123)
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Profile/>
        <Home/>
      </div>
    )
  }
}
