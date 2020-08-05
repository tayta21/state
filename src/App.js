import React from 'react';
import logo from './logo.svg';
import './App.css';
import firstpic from "./img/rick.png"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state= {
    person : {
      fullName:"rick",
      imgSrc : firstpic,
      profession : "scientiste"
    },
    verify : false,
    time : 0
  }
 
  }
  
  handleShow = () => {
    this.setState({verify:true})
  }
 handleshowtwo =() =>{
  this.setState({verify:false})
 }
  componentDidMount(){
    setInterval(() => {
      this.setState({time : this.state.time +1})
    }, 1000);
  }

  render() {
    return <div>
      {this.state.verify ?<div>
        <h1>{this.state.person.fullName}</h1>
        <img src={this.state.person.imgSrc}/>
        <h1>{this.state.person.profession}</h1>
        <button onClick={this.handleshowtwo}>return</button>
      </div> 
      : 
      <button onClick={this.handleShow}>Allow</button> }
      <h1>{this.state.time}</h1>       
      </div>
  }
}
export default App;
