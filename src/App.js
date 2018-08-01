import React, { Component } from 'react';
import './App.css';
import Input from "./Input";
import Output from "./Output";
import marked from 'marked';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input:"# Cool stuff"
      ,
      output: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    let output = marked(this.state.input);
    this.setState({
      input:event.target.value,
      output
    })
  }
  componentDidMount(){
    this.setState({
      output: marked(this.state.input)
    })
  }
  render() {
    return (
      <div className="App">
      <header>
        <h1>Live markdown previewer</h1>
        </header>
      <div class="wrapper">
      <div class="desc">
        <h2>▼ MARKDOWN ▼</h2>
      </div>
        <Input content={this.state.input}
               action = {this.handleChange}
               id="editor" />
        </div>
        <div class="wrapper">
        <div class="desc">
        <h2>
          ▼ OUTPUT ▼
        </h2>
        </div>
        <Output id="preview"
                content={this.state.output}/>
      </div>
      </div>
    );
  }
}

export default App;
