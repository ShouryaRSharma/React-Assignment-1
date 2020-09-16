import React, { Component } from 'react';
import Input from './Components/UserInput';
import Output from './Components/UserOutput';
import './App.css';

class App extends Component{
  state = {
     username: "Username"
    
  }

  nameEventHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Input change={this.nameEventHandler} username={this.state.username}/>
        <Output username={this.state.username}/>
        <Output username={this.state.username}/>
      </div>
    );
  }
}

export default App;
