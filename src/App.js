import React from 'react';
export default class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state={
      counter:0
    }
  }
  incre=()=>{this.setState({counter:this.state.counter+1})};
  decre=()=>{this.setState({counter:this.state.counter-1})};
  reset=()=>{this.setState({counter:0})}

  render(){
   return(
    
    <>
    <center>
    <div id="div1">
      <center>
    <button onClick={this.incre} className="inputs">+</button>
    &nbsp;   &nbsp;
    <span className="inputs" id="inputs1">{this.state.counter}</span>
    &nbsp;   &nbsp;
    <button onClick={this.decre} className="inputs">-</button>
    &nbsp;   &nbsp;
    <button onClick={this.reset} className="inputs">reset</button>
    </center>
    </div>
    </center>
    </>
  )
}
}

