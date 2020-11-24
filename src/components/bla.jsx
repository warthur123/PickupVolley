import React, { Component } from 'react';

class Bla extends Component {
    state = {}
    render() {
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
        return (
            <div></div>
        );
    }
}

export default Bla;