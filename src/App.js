import React from 'react';
import './App.css';

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
      </div>
    );
  }
}
export default App;
