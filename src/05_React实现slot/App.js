import React, { Component } from 'react'
import NavBar2 from './NavBar2'
import NavBar from './NavBar'
export default class App extends Component {

  render() {
    return (
      <div>
        <NavBar>
          <span>aaa</span>
          <strong>bbb</strong>
          <a href="/#">ccc</a>
        </NavBar>
        <NavBar2 
          leftSlot={<span>aaa</span>}
          centerSlot={<span>bbb</span>}
          rightSlot={<span>ccc</span>}/>
      </div>
    )
  }
}
