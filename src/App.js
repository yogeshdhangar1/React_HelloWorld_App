import React from 'react';
import './App.css';
import logo from './BL logo.svg.png'

class App extends React.Component{
  url ="www.google.com"
  constructor(){
    super()
    this.state={
      tittle:'Hello Frmo Bridgelabz'
    }
  }
  // onclick function
  onClick = (Sevent)=>{
    console.log("Save Button Is Clicked!",Sevent);
    window.open(this.url,"Blank")
  }
  render(){
    return(
      <div>
        <h1>{this.state.tittle}</h1>
        <img src={logo} onClick = {this.onClick}
         alt="Bridgelab Logo: Bridge to Employement Trough Lab Work"/>
      </div>

    );
  }
}
export default App;
