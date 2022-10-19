import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    console.log('Constructor exicuted');
  }

  render() {
    console.log('render() exicuted');
    return (
      <div className="App">
        <h1>Welcome in React World</h1>
      </div>
    );
  }
}

export default App;
