import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import Bar from './../components/Bar/Bar';
import Card from './../components/Card/Card';
import LoginContainer from './../containers/LoginContainer';

class App extends Component {
  
  handleClick(){}

  render() {
    return (
      <div className="App">
        <Bar title="GAT TECNOLOGIA E DESENVOLVIMENTO DE SISTEMAS LTDA" />
        <LoginContainer />
      </div>
    );
  }
}
export default App;
