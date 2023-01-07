import React from 'react';
import './App.css';
import logo from './BL logo.svg.png'
import Home from './component/Home.js'
import Bridgelabz from './component/Bridgelabz';
import About from './component/About';
import { Route, Routes, Link } from "react-router-dom"


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
      <Routes>
        <Route path = '/home' element ={<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path = '/section' element = {<Bridgelabz/>}/>
      </Routes>
      <header></header>
      <div id="main">
        <article>
        <div className="App">
            <div>
              <h2>Hello {this.state.userName} from Bridgelabz</h2>
              <img src={logo} onClick={this.onClicks} alt='The Bridgelabz logo: a Bridge to Employement through lab Works'/>
            </div>
            <div>
              <input onChange={this.onNameChange} />
              <span className='error_output'>{this.state.nameError}</span>
              <br></br>
            </div>
          </div>
          <Bridgelabz></Bridgelabz>
        </article>
        <nav></nav>
        <aside></aside>
      </div>
      <footer></footer>
    </>
    );     
    
  }
}
export default App;
