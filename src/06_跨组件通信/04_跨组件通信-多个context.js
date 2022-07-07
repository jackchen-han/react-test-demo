import React, { Component } from 'react'

// 创建context对象
const UserContext = React.createContext({
  nickname:'aaa',
  level:-1
})

const ThemeContext = React.createContext({
  color:'black'
})

// 函数组件使用context
function ProfileHeader(){
  return (

    <UserContext.Consumer>
      {
        value=>{
          return (
            <ThemeContext.Consumer>
            {
              theme => {
                return (
                <div>
                  <h2>用户昵称： {value.nickname} </h2>
                  <h2>用户等级： { value.level}</h2>
                  <h2>颜色： {theme}</h2>
                </div>
                )
              }
            }
            </ThemeContext.Consumer>
          )
        }
      } 
    </UserContext.Consumer>
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
      level:99,
      color:'red'
    }
  }
  render() {
    const {nickname,level} = this.state
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <ThemeContext.Provider value={this.state.color}>
            <Profile />
          </ThemeContext.Provider>
          
        </UserContext.Provider>
      </div>
    )
  }
}
