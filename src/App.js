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
    const nameRegex =  RegExp ('^[A-Z]{1}[a-z]{3,8}$')
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
      <div className='contanier'>
        <h1>{this.state.userName} from Bridgelabz</h1>
        <img src={logo} width={150}height={150} onClick = {this.onClick}
         alt="Bridgelab Logo: Bridge to Employement Trough Lab Work"/>
         <h2>At Bridgelabz We re Comunnity of </h2>
         <ul>
          <li>technologist</li>
          <li>thinkers</li>
          <li>builders</li>
         </ul>
         <p>
         Working together to keep the Tech Employability of Engineers alive and accessible,<br />
         so Tech Companines worldwide can get contributors and creators for Technology solutions <br />
         We believe this act of human collaboration across an employability platform is essential <br />
         to individual growth and our collective future.
         </p>
         <p>
         To Know About us,visit <a href="https://www.bridgelabz.com/"> BridgeLabz</a> <br />
         to learn even more about our mission i.e. <strong>Employability to all</strong>
         </p>
      </div>
      <div className='UserValid'>
        <input onChange ={this.onNameChange} />
        <span className='error-output'>{this.state.nameError}</span>
      </div>
      </>
    );
  }
}
export default App;
