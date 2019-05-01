import React, { Component } from 'react'

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
            <div className="picture-icons">
                <i className="far fa-heart" onClick={this.handleClick}>  {this.state.counter}  </i><i className="far fa-comment"></i>
            </div>
        )
    }


}
export default ButtonInteraction;
