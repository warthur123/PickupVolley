import React, { Component } from 'react';
import Team from './team.jsx'
import Scoreboard from './scoreboard.jsx';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [
                { id: 0, name: 't1' },
                { id: 1, name: 't2' },
                { id: 2, name: 't3' }],
            score: { leftscore: 0, rightscore: 0 },
            name: '',

        };

    }


    addHandler = (e) => {
        let newlist = this.state.teams;

        if (this.state.teams.length === 0) {
            let nextID = 0;
            newlist.push({ id: nextID, name: this.state.name });
            this.setState({ teams: newlist });
        } else {
            let nextID = newlist[newlist.length - 1].id + 1;
            newlist.push({ id: nextID, name: this.state.name });
            this.setState({ teams: newlist });
        }

    }

    handleNewTeam = (e) => {
        if (e.target.value !== '') {
            this.setState({ name: e.target.value });
        }
    }

    deleteHandler = (teamID) => {
        const newList = this.state.teams.filter(curr => curr.id !== teamID);
        this.setState({ teams: newList });
    }

    handleNextGame = () => {
        this.setState({ score: { leftscore: 0, rightscore: 0 } });
        if (this.state.teams.length !== 0) {
            const grabFirst = this.state.teams[0];
            let newList = this.state.teams.slice(1, this.state.teams.length);
            newList.push(grabFirst);
            this.setState({ teams: newList });
        }
    }


    addLeft = () => {
        if (this.state.score.leftscore < 25) {
            this.setState({ score: { leftscore: this.state.score.leftscore + 1, rightscore: this.state.score.rightscore } });
        }
    };

    subLeft = () => {
        if (this.state.score.leftscore > 0) {
            this.setState({ score: { leftscore: this.state.score.leftscore - 1, rightscore: this.state.score.rightscore } });
        }
    };

    addRight = () => {
        if (this.state.score.rightscore < 25) {
            this.setState({ score: { leftscore: this.state.score.leftscore, rightscore: this.state.score.rightscore + 1 } });
        }
    };


    subRight = () => {
        if (this.state.score.rightscore > 0) {
            this.setState({ score: { leftscore: this.state.score.leftscore, rightscore: this.state.score.rightscore - 1 } });
        }
    };

    handleResetScore = () => {
        this.setState({ score: { leftscore: 0, rightscore: 0 } });
    };

    render() {
        console.log('gamescore', this.state.score);
        return (
            <div className="game">
                <Scoreboard leftscore={this.state.score.leftscore}
                    rightscore={this.state.score.rightscore}
                    onAddLeft={this.addLeft}
                    onSubLeft={this.subLeft}
                    onAddRight={this.addRight}
                    onSubRight={this.subRight}
                    onResetScore={this.handleResetScore} />


                <div className="add-team-form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="team-name" onChange={this.handleNewTeam} />
                    </form>
                    <button onClick={this.addHandler}>add team</button>
                </div>

                <div className="teams" style={{width: '800px', margin: '0 auto', textAlign: 'center'}}>
                    {this.state.teams.map(team => <Team key={team.id} team={team} onDelete={this.deleteHandler} />)}
                </div>

                <button onClick={this.handleNextGame}>Next Game</button>
            </div>
        );
    }
}

export default Game;