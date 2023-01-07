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
    const nameRegex =  RegExp ('^[A-Z]{1}[a-z]{3}$')
     // set the tittle using setState method 
     this.setState({userName:event.target.value})
     if(nameRegex.test(event.target.value)){
      this.setState({nameError:''})
     }else{
      this.setState({nameError:'Name Is Incorrect'})
     }
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
        <span className='error-output'>{this.state.nameError}</span>
      </div>
      </>
    );
  }
}
export default App;
