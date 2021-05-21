import React from 'react';
export class About extends React.Component{
  constructor(){
    super()
    this.state = {
      msg: 'hello',
      params:{
        name:'react'
      }
    }
    //this.setState({msg: 'hello'})
  }
  changeName(){
    console.log(this)
    this.setState({'msg': 'enjoy'})
  }
  render(){
    return (
      <div>{this.state.msg}
      <h3 onClick={this.changeName.bind(this)}>{this.state.params.name}</h3>
      </div>
      
    )
  }
}