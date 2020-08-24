import React from "react";
import "./App.css";
import axios from "axios";
class App extends React.Component {
  state = {
    advice: "",
  };
  // DidMount Component

  componentDidMount() {
    this.fetchAdvice();
  }
  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        const { advice } = res.data.slip;
        this.setState({ advice });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h4 className="heading">
            <span className="quote-1">&rdquo;</span>
            {advice}
            <span className="quote-2">&ldquo;</span>
          </h4>
        </div>
        <button className="button" onClick={this.fetchAdvice}>
          <span>GIVE ME ADVICE !</span>
        </button>
      </div>
    );
  }
}
export default App;
