import React, { Component } from 'react';

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = { name: this.props.team.name };
    }


    render() {
        return (
            <div>
                <span>{this.state.name}</span>
                <button onClick={() => this.props.onDelete(this.props.team.id)}>delete</button>
            </div>
        );
    }
}

export default Team;