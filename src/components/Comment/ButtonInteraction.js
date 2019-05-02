import React, { Component } from 'react'
import './ButtonInteraction.css';

class ButtonInteraction extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    handleClick = () => {
        this.setState(({ counter }) => ({
            counter: counter + 1
        }));
    };

    render() {
        return (

            <React.Fragment>
                <div className="picture-icons">
                    <i className="far fa-heart" onClick={this.handleClick}></i><i className="far fa-comment"></i>
                </div>
                <div className="likes-container"><strong>{this.state.counter} likes</strong></div>
            </React.Fragment>
        )
    }


}
export default ButtonInteraction;
