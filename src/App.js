import React, { Component } from 'react';
import './App.scss';
import './json/fazenda.json';
import Content from './container/Content/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Content />
          
      </div>
      
    );
  }
}

export default App;
