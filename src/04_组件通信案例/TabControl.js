import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TabControl extends Component {
  constructor(){
    super()
    this.state={
      currentIndex:0
    }
  }
  render() {
    console.log(this.props)
    const { titles } = this.props
    const { currentIndex } = this.state
    return (
      <div className="tab-control">
        {
          titles.map((item,index)=>{
            return (
            <div 
              className={'tab-item '+ (index === currentIndex ? "active":"")} 
              onClick={e=>this.itemClick(index)}
              key = {item}>
                <span>{item}</span>
            </div>
            )
          })
        }
      </div>
    )
  }
  itemClick(index){
    console.log(index)
    this.setState({
      currentIndex:index
    })
    const {itemClick} = this.props
    itemClick(index)

  }
}

TabControl.propTypes = {
  titles:PropTypes.array.isRequired
}
