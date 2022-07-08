import React, { PureComponent } from 'react'

class Main extends PureComponent{
  render(){
    console.log('main')
    return (
      <div>main</div>
    )
  }
}

export default class App extends PureComponent {
  constructor(){
    super()
    this.state={
      counter:0
    }
  }
  render() {
    console.log('render function is trigger')
    return (
    <div>
      <h2>{this.state.counter}</h2>
      <button onClick={e=>this.increment()}>+</button>
      <Main></Main>
    </div>  
    )
  }
   increment(){
     this.setState({
      counter:this.state.counter + 1
    })
    console.log(this.state.counter)
    // setTimeout(()=>{
    //   this.setState({
    //     counter:this.state.counter + 1
    //   })
    //   console.log(this.state.counter);
    // },0)
  }
}
