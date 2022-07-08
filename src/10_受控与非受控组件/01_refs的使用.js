import React, { PureComponent ,createRef,Component} from 'react'

class Counter extends Component{
  constructor(){
    super()
    this.state={
      counter:0
    }
  }
  render(){
    return (
      <div>
        counter:{this.state.counter}
        <button onClick={e=>this.increment()}>+</button>
      </div>
    )
  }
  increment(){
    this.setState({
      counter : this.state.counter+1
    })
  }

}

export default class App extends PureComponent {
  constructor(props){
    super(props)
    // 方式二： 赋值对象
    this.titleRef = createRef()

    // 方式三：箭头函数
    this.Eltitle = ''

    this.counterRef = createRef()
  }
  // ref 属性可以赋值字符串 对象 函数
  componentDidMount(){
    
  }
  render() {
    return (
      <div>
        <h2 ref="titleRef">Hello React</h2>
        <h2 ref={this.titleRef}>Hello</h2>
        <h2 ref={(arg)=>{this.Eltitle = arg}}>Hello React</h2>
        <button onClick={e=>this.changeText()}>改变文本</button>
        <hr />
        <Counter ref={this.counterRef}/>
        <button onClick={e=>this.handleCounterRef()}>App按钮</button>
      </div>
    )
  }
  changeText(){
    // 1.获取ref属性,方式一：字符串
    console.log(this.refs)
    this.refs.titleRef.innerHTML = "hello coderwhy"

    // 2.方式二：对象方式
    console.log(this.titleRef)
    this.titleRef.current.innerHTML = 'hello coderwhy'

    // 3.方式三：函数方式
    this.Eltitle.innerHTML = 'Hello coderHan'
  }

  handleCounterRef(){
    this.counterRef.current.increment()
    
  }
}


