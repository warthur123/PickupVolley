import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Team from './team.jsx'
import Scoreboard from './scoreboard.jsx';
import './game.css';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [
                ],
            score: { leftscore: 0, rightscore: 0 },
            name: '',

        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        
        console.log(data.get('team-name'));

        if (data.get('team-name') !== '') {
            let newlist = this.state.teams;
            if (this.state.teams.length === 0) {
                let nextID = 0;
                newlist.push({ id: nextID, name: data.get('team-name') });
                this.setState({ teams: newlist });
            } else {
                let nextID = Math.max.apply(Math, newlist.map(function (t) { return t.id; })) + 1;
                newlist.push({ id: nextID, name: data.get('team-name') });
                this.setState({ teams: newlist });
            }
            document.getElementById("form").reset();
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
        const left = this.state.score.leftscore;
        const right = this.state.score.rightscore;

        if (left < right + 1 || left < 25) {
            this.setState({ score: { leftscore: left + 1, rightscore: right } });
        }
    };

    subLeft = () => {
        const left = this.state.score.leftscore;
        const right = this.state.score.rightscore;

        if (left > 0) {
            this.setState({ score: { leftscore: left - 1, rightscore: right } });
        }
    };

    addRight = () => {
        const left = this.state.score.leftscore;
        const right = this.state.score.rightscore;

        if (right < left + 1 || right < 25) {
            this.setState({ score: { leftscore: left, rightscore: right + 1 } });
        }
    };


    subRight = () => {
        const left = this.state.score.leftscore;
        const right = this.state.score.rightscore;

        if (this.state.score.rightscore > 0) {
            this.setState({ score: { leftscore: left, rightscore: right - 1 } });
        }
    };

    handleResetScore = () => {
        this.setState({ score: { leftscore: 0, rightscore: 0 } });
    };

    handleOnDragEnd = (result) => {
        if (result.destination !== null) {
            const sourceIndex = result.source.index;
            const destinationIndex = result.destination.index;

            const newList = this.resortTeams(sourceIndex, destinationIndex);

            this.setState({ teams: newList });
        }

    };

    // element at source index placed in destination index. return new sorted array
    resortTeams(source, destination) {
        let result = [];
        const sourceContent = this.state.teams[source];

        if (source === destination) {
            return this.state.teams;
        } else if (source > destination) {
            const end = this.state.teams.slice(destination, this.state.teams.length).filter(t => t !== sourceContent);
            result = this.state.teams.slice(0, destination);
            result.push(sourceContent);
            return result.concat(end);
        } else {
            const noSource = this.state.teams.filter(t => t !== sourceContent);
            result = noSource.slice(0, destination);
            result.push(sourceContent);
            return result.concat(noSource.slice(destination, noSource.length));
        }
    }

    render() {

        return (
            <div className="game-wrapper">

                <Scoreboard leftscore={this.state.score.leftscore}
                    rightscore={this.state.score.rightscore}
                    onAddLeft={this.addLeft}
                    onSubLeft={this.subLeft}
                    onAddRight={this.addRight}
                    onSubRight={this.subRight} />

                <div className="reset-next">
                    <button className="reset" onClick={this.handleResetScore}>Reset Score</button>
                    <button className="next-game" onClick={this.handleNextGame}>Next Game</button>
                </div>


                <div className="teams">

                    <span className="teams-label">Teams: </span>

                    <DragDropContext onDragEnd={this.handleOnDragEnd}>
                        <Droppable droppableId="teams-list">
                            {(provided) => (
                                <ul className="teams-list" {...provided.droppableProps} ref={provided.innerRef}>
                                    {this.state.teams.map((team, index) => {
                                        return (
                                            <Draggable key={team.id.toString()} draggableId={team.id.toString()} index={index}>
                                                {(provided) => (
                                                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                        <Team key={team.id} team={team} onDelete={this.deleteHandler} />
                                                    </li>
                                                )}
                                            </Draggable>
                                        )
                                    })}
                                    {provided.placeholder}

                                    
                                    <li>
                                        <div className="add-team-form">
                                            <form onSubmit={this.handleSubmit} id="form">
                                                <input className="add-team-input" type="text" name="team-name" id="team-name" maxLength='20' />
                                                <button className="add-team-btn">Add Team</button>
                                            </form>
                                        </div>
                                    </li>
                                </ul>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>


            </div>
        );
    }
}

export default Game;