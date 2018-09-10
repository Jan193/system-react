import React, { Component } from 'react';
import './App.css';
// import "antd/dist/antd.css"

class App extends Component {
  render() {
    return (
      <div className="App" style={{height:'100vh'}}>
        {this.props.children}
      </div>
    );
  }
}

export default App;
