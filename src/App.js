import React from 'react';
import './App.css';
// import logo from './BL logo.svg.png'
import Home from './component/Home.js'
import Bridgelabz from './component/Bridgelabz';
import About from './component/About';
import { Route, Routes, Link } from "react-router-dom"


class App extends React.Component{
  render(){
   return(
       <div>
        <h1>
          <Link to = "/home"> Home  </Link> |
          <Link to ="/about"> About</Link>  |
          <Link to = "/bridgelabz"> Bridgelabz</Link>
        </h1>

        <Routes>
          <Route path ='/home' element={<Home/>}/>
          <Routes path = '/about' element ={<About/>}/>
          <Routes path = '/section' element = {<Bridgelabz/>}/>
        </Routes>
       </div>       
    );
  }
}

export default App;