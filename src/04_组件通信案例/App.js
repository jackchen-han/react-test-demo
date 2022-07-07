import React, { Component } from 'react'

import TabControl from './TabControl'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      currentIndex:0,
      currentTitle:"新款",
      titles:['新款','精选','潮流']
    }
  }
  render() {
    const {currentTitle,titles} = this.state
    return (
      <div>
        <TabControl itemClick={index=>this.itemClick(index)} titles={titles} ></TabControl>
        <h2>{ currentTitle }</h2>
      </div>
    )
  }
  itemClick(index){
    this.setState({
      currentTitle:this.state.titles[index]
    })
  }
}
