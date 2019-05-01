import React, { Component } from 'react';
import './AddCommentForm.css';

class AddCommentForm extends Component {
    constructor(props) {
        super(props);
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
        const newComment =  {
            username: "IGTest",
            text: this.state.comment,
          }
        this.props.addComment(newComment, this.props.index);
        this.setState({
            comment: "",
        });
    }

    render() {
        return (
            <div>
                <form className="add-comment" onSubmit={this.addNewComment}>
                    <input
                        name= "comment"
                        type="text"
                        placeholder="Add comment..."
                        value={this.state.comment}
                        onChange={this.handleChanges}
                    />
                </form>
            </div>
        )
    }
}

export default AddCommentForm;
