import React, { Component } from 'react'

function Childcpn(props){
  const {name,age,height} = props
  return <h2>{ name + age + height}</h2>
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
