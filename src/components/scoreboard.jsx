import React, { Component } from "react";
import './scoreboard.css';

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return (
      <div className="scoreboard-wrapper">
        <div className="scores">
          <div className="left-score">
            <span>{this.props.leftscore}</span>

          </div>
          <div className="right-score">
            <span>{this.props.rightscore}</span>

          </div>
        </div>

        <div className="add-subtract">
          <div>
            <button className="sub-left" onClick={() => this.props.onSubLeft()}>-</button>
            <button className="add-left" onClick={() => this.props.onAddLeft()}>+</button>
          </div>

          <div>
            <button className="sub-right" onClick={() => this.props.onSubRight()}>-</button>
            <button className="add-right" onClick={() => this.props.onAddRight()}>+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Scoreboard;
