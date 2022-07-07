import React, { Component } from 'react'

// 创建context对象
const UserContext = React.createContext({
  nickname:'aaa',
  level:-1
})

class ProfileHeader extends Component{
  render (){
    const {nickname,level} = this.context
    console.log('this.context----->',this.context)
    return (
      <div>
      <h2>用户昵称： {nickname} </h2>
      <h2>用户等级： { level}</h2>
    </div>
    )
    
  } 
}

ProfileHeader.contextType = UserContext

// 属性展开{...props}
function Profile(props){
  return (
    <div>
      header
      {/* <ProfileHeader nickname={props.nickname} level={props.level}/> */}
      <ProfileHeader />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
        <li>设置5</li>
        <li>设置6</li>
      </ul>
    </div>
  )
}
export default class App extends Component {
  constructor(){
    super()
    this.state={
      nickname:"kobe",
      level:99
    }
  }
  render() {
    const {nickname,level} = this.state
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <Profile /> 
        </UserContext.Provider>
        
      </div>
    )
  }
}
