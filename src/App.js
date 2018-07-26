import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "react-table/react-table.css";

import FoldableTableWithHeader from './components/FoldableTableWithHeader';
import FoldableTableWithoutHeader from './components/FoldableTableWithoutHeader';
import FoldableTableCustomState from './components/FoldableTableCustomState';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { table: 'foldableTableWithHeader' };
  }

  buttonClick = e => {
    const id = e.target.id;
    this.setState(p => { return { table: id } });
  }

  render() {
    const { table } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button id="foldableTableWithHeader" onClick={this.buttonClick}>
            Foldable Table With Header
          </button>
          <button id="foldableTableWithoutHeader" onClick={this.buttonClick}>
            Foldable Table Without Header
          </button>
          <button id="foldableTableCustomState" onClick={this.buttonClick}>
            Foldable Table With Header
          </button>
        </p>
        <br />
        {table === 'foldableTableWithHeader' && <FoldableTableWithHeader />}
        {table === 'foldableTableWithoutHeader' && <FoldableTableWithoutHeader />}
        {table === 'foldableTableCustomState' && <FoldableTableCustomState />}
      </div >
    );
  }
}

export default App;
