import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import FromInput from './Components/FromInput'
import Summit from './Components/Summit'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div style="">
      <fieldset>
      <FromInput />
      <Summit />
      </fieldset>
      </div>
      <Header />
      

        </div>
    );
  }
}

export default App;
