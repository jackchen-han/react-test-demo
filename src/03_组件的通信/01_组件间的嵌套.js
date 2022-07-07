import React, { Component } from 'react'

// header
function Header(){
  return <h2>我是Header组件</h2>
}

// Main
function Banner (){
  return <h3>我是轮播图</h3>
}
function ProductList(){
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
  )
}
function Main(){
  return (
    <>
      <h2>我是Main组件</h2>
      <Banner/>
      <ProductList/>
    </>
  )
}

// footer
function Footer(){
  return <h2>我是Footer组件</h2>
}
export default class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    )
  }
}
