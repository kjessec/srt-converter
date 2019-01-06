import React, { Component } from 'react';
import './App.css';

import convert from './convert';
const noop = () => {};
const divStyle = { display: 'inline-block', width: '45%',verticalAlign: 'top' };
const textareaStyle = { width: '80%' };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tsvContent: '',
      tsvResult: '',
      error: null
    };
    this.tsvConvert = this.tsvConvert.bind(this);
  }

  tsvConvert(content) {
    try {
      this.setState({ tsvResult: convert(content), error: null });
    } catch(e) {
      this.setState({ error: e.toString() });
    }
  }

  render() {
    const { error, tsvResult } = this.state;
    const resultSection = (error
      ? <div>{error}</div>
      : <textarea onDoubleClick={ev => ev.target.select()} style={textareaStyle} value={tsvResult} onChange={noop}></textarea>
    );

    return (
      <div style={{ height: '100%' }}>
        <div style={divStyle}>
          <h1>1. Please insert .tsv content here</h1>
          <textarea style={textareaStyle} onChange={ev => this.tsvConvert(ev.target.value)}/>
        </div>
        <div style={divStyle}>
          <h1>2. Grab your converted srt here (double click to select all)</h1>
          {resultSection}
        </div>
      </div>
    )
  }
}

export default App;
