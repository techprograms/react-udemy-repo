import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: {firstName: "Ganesh", lastName: "Rai"},
    };
    console.log("Constructor exicuted");
  }

  render() {
    console.log("render() exicuted");
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        <button
          onClick={() => {
            this.setState(() => {
              return {
                name: "Saurabh",
              };
            });
          }}
        >
          Edit Text
        </button>
      </div>
    );
  }
}

export default App;
