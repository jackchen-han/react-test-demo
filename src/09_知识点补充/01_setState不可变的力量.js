
import React, { Component } from 'react'

export default class App
 extends Component {
   constructor(){
     super()
     this.state = {
       friends:[{name:'lilei',age:18},{name:'hlei',age:29},{name:'ahu',age:28}]
     }
   }
  //  shouldComponentUpdate(newProps,newState){
  //   if(newState.friends !== this.state.friends){
  //     return true
  //   }
  //   return false
  //  }
  render() {
    return (
      <div>
        <h2>好友列表</h2>
        <ul>
          {
            this.state.friends.map((item,index)=>{
            return <li key={item.name}>姓名：{item.name}，年龄：{item.age} <button onClick={e=>this.increment(index)}>age+1</button></li>
            })
          }
          
        </ul>
        <button onClick={e=>this.insertData()}>添加数据</button>
      </div>
    )
  }

  insertData(){
    // 1.在开发中不要这么做
    // console.log("点击了添加数据的按钮")
    // const newData = {name:'tom',age:19}
    // this.state.friends.push(newData)
    // this.setState({
    //   friends:this.state.friends
    // })
    // 2.推荐做法

    const newFriend = [...this.state.friends]
    const newData = {name:'tom',age:19}
    newFriend.push(newData)
    this.setState({
      friends:newFriend
    })
  }
  increment(index){
    const newFriends = [...this.state.friends]
    newFriends[index].age += 1
    this.setState({
      friends:newFriends
    })
  }
}
