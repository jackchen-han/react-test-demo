import React, { Component } from 'react'

export default class NavBar2 extends Component {
  render() {
    const {leftSlot,rightSlot,centerSlot} = this.props
    return (
      <div className="nav-bar">
        <div className="nav-left nav-item">
          {
            leftSlot
          }
        </div>
        <div className="nav-center nav-item">
        {
           centerSlot
        }
        </div>
        <div className="nav-right nav-item">
        {
            rightSlot
        }
        </div>
      </div>
    )
  }
}