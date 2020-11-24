import React, { Component } from "react";

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return (
      <div style={{ width: '800px', margin: '0 auto' }}>
        <div className="scoreboard-wrapper" style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div className="left-score" style={{}}>
            <span style={{ fontSize: '90px' }}>{this.props.leftscore}</span>

          </div>
          <div className="right-score">
            <span style={{ fontSize: '90px' }}>{this.props.rightscore}</span>

          </div>
        </div>

        <div className="add-subtract" style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={() => this.props.onSubLeft()}>-</button>
            <button onClick={() => this.props.onAddLeft()}>+</button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={() => this.props.onSubRight()}>-</button>
            <button onClick={() => this.props.onAddRight()}>+</button>
          </div>
        </div>
        
        <button onClick={() => this.props.onResetScore()}>reset</button>
      </div>
    );
  }
}

export default Scoreboard;
