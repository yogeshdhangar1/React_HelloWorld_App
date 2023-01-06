import React from 'react';
import './App.css';
import logo from './BL logo.svg.png'

class App extends React.Component{
  url ="www.google.com"
  constructor(){
    super()
    this.state={
      userName :' '
    }
  }

  // onclick function
  onClick = (Sevent)=>{
    console.log("Save Button Is Clicked!",Sevent);
    window.open(this.url,"Blank")
  }
  onNameChange = (event) =>{
    console.log("value is",event.target.value)
    // set the tittle using setState method 
    this.setState({userName:event.target.value})
  }
  render(){
    return(
      <>
      <div>
        <h1>{this.state.userName} from Bridgelabz</h1>
        <img src={logo} onClick = {this.onClick}
         alt="Bridgelab Logo: Bridge to Employement Trough Lab Work"/>
      </div>
      <div>
        <input onChange ={this.onNameChange} />
      </div>
      </>

    );
  }
}
export default App;
