import React from 'react';
import './App.css';
import logo from './BL logo.svg.png'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      tittle:'Hello Frmo Bridgelabz'
    }
  }
  render(){
    return(
      <div>
        <h1>{this.state.tittle}</h1>
        <img src={logo}
         alt="Bridgelab Logo: Bridge to Employement Trough Lab Work"/>
      </div>

    );
  }
}
export default App;
