import React, { Component } from 'react'

export default class AddCommentForm extends Component {
    constructor() {
        super();
        this.state = {
            comment: '',

        }
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    addNewComment = event => {
        event.preventDefault();
        const newComment = {
            task: this.state.comment,
        }


        this.setState({
            posts: [...this.state.posts, newComment],
            comment: "",
        });
    }

    render() {
        return (
            <div>
                <form className="add-comment" onsubmit={this.addNewComment}>
                    <input
                        placeholder="Add comment..."
                        value={this.comment}
                        name="comment"
                        onChange={this.handleChanges}
                    />
                </form>
            </div>
        )
    }
}
