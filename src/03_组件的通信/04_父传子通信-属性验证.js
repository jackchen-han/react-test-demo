import React, { Component } from 'react'
import PropTypes from 'prop-types'

function Childcpn(props){
  const {name,age,height} = props
  const { names } = props
  return (
    <div>
      <h2>{ name + age + height}</h2>
      <ul>
        {
          names.map((item,index)=>{
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
    
    )
}

Childcpn.propTypes = {
  name:PropTypes.string,
  age:PropTypes.number,
  height:PropTypes.number,
  names:PropTypes.array
}

export default class App extends Component {
  render() {
    return (
      <div>
         <Childcpn name="why" age={18} height={1.88} names={['ac','bcd','sgu','sss']}/>
        <Childcpn name="kobe" age={33} height={1.98} names={['ass','abc','cba','nba']}/>
      </div>
    )
  }
}
