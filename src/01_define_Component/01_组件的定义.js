
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       message:'你好啊，李银河！'
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h2>我是app组件</h2>
//         <h2>{ this.state.message }</h2>
//         <span>我是韩泽层</span>
//       </div>
//     )
//   }
// }

/**
 * 函数式组件的特点
 *  1.没有this对象
 *  2.没有内部状态（hooks ）
 *  
 * 
 * @returns react元素 数组 fragment
 */

export default function App (){
  return (
    <>
      <div>我是一个function组件：App</div>
      <h2>你好啊，王小波！</h2>
    </>

  )
}