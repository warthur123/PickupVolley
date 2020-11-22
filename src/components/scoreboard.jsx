import React, { Component } from "react";

class Scoreboard extends Component {
  state = {
    leftscore: 0,
    rightscore: 0,
  };

  addLeft = () => {
    if (this.state.leftscore < 25) {
      this.setState({ leftscore: this.state.leftscore + 1 });
    }
  };

  subtractLeft = () => {
    if (this.state.leftscore > 0) {
      this.setState({ leftscore: this.state.leftscore - 1 });
    }
  };


  addRight = () => {
    if (this.state.rightscore < 25) {
      this.setState({ rightscore: this.state.rightscore + 1 });
    }
  };

  
  subtractRight = () => {
    if (this.state.rightscore > 0) {
      this.setState({ rightscore: this.state.rightscore - 1 });
    }
  };

  resetScore = () => {
    this.setState({ rightscore: 0 });
    this.setState({ leftscore: 0 });
  };

  render() {
    return (
      <div className="scoreboard-wrapper">
        <div className="left-score">
          <span style={{ fontSize: 40 }}>{this.state.leftscore}</span>
          <button onClick={this.addLeft}>+</button>
          <button onClick={this.subtractLeft}>-</button>
        </div>
        <div className="right-score">
          <span style={{ fontSize: 40 }}>{this.state.rightscore}</span>
          <button onClick={this.addRight}>+</button>
          <button onClick={this.subtractRight}>-</button>
        </div>

        <button onClick={this.resetScore}>reset</button>
      </div>
    );
  }
}

export default Scoreboard;
