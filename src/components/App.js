import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import Bar from './../components/Bar/Bar';
import Card from './../components/Card/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bar title="GAT TECNOLOGIA E DESENVOLVIMENTO DE SISTEMAS LTDA" />
        <Card>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </Card>
        
      </div>
    );
  }
}
export default App;
