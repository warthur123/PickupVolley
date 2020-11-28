import React, { Component } from 'react';

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = { name: this.props.team.name };
    }


    render() {
        return (
            <>
                <button type="button" className="close" aria-label="Close" style={{userSelect: 'none', marginRight: 8}} onClick={() => this.props.onDelete(this.props.team.id)}>
                    &times;
                </button>
                <span style={{marginRight: 60}}>{this.state.name}</span>
            </>
        );
    }
}

export default Team;