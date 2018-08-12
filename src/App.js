import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import PostComponent from './components/PostComponent';
import PostFormComponent from './components/PostFormComponent';
import  appStore  from './AppStore';

class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <PostFormComponent/>
          <hr/>
          <PostComponent/>
      </div>
      </Provider>
    );
  }
}

export default App;
