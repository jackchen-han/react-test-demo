import React, { Component } from 'react'

function ProfileHeader(props){
  return (
    <div>
      <h2>用户昵称： {props.nickname} </h2>
      <h2>用户等级： {props.level} </h2>
    </div>
  )
}

// 属性展开{...props}
function Profile(props){
  return (
    <div>
      header
      {/* <ProfileHeader nickname={props.nickname} level={props.level}/> */}
      <ProfileHeader {...props}/>
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
        <Profile nickname={nickname} level={level}/>
      </div>
    )
  }
}
