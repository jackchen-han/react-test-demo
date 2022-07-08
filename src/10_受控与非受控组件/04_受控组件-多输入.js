import React, { PureComponent } from 'react'

export default class App
  extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      username: 'banana',
      password: '',
      propscode: ''
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e => { this.handleSubmit(e) }}>
          <label htmlFor="">
            用户：<input
              type="text"
              name="username"
              id="username"
              onChange={e => this.handleInputChange(e)}
              value={this.state.username} />
          </label>
          <br />
          <label htmlFor="">
            密码：<input
              type="text" id="password"
              name="password"
              onChange={e => this.handleInputChange(e)}
              value={this.state.password} />
          </label>
          <br />
          <label htmlFor="">
            验证码：<input
              type="text" id="propscode"
              name="propscode"
              onChange={e => this.handleInputChange(e)}
              value={this.state.propscode} />
          </label>
          <br />
          <input type="submit" value="提交" />
        </form>
      </div>
    )
  }
  handleSubmit(event) {
    event.preventDefault()
    const { username, password, propscode } = this.state
    console.log(username, password, propscode)

  }
  handleChange(event) {
    console.log(event.target.value)
    this.setState({
      username: event.target.value
    })
  }
  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }
  handleValidChange(event) {
    this.setState({
      // 计算属性名
      [event.target.name]: event.target.value
    })
  }

  // 统一封装到一个属性
  handleInputChange(event) {
    this.setState({
      // 计算属性名
      [event.target.name]: event.target.value
    })
  }
}
