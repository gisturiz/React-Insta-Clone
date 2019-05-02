import React from 'react';
import AddCommentForm from '../Comment/AddCommentForm';
import './CommentSection.css';
import moment from 'moment';

function CommentSection(props) {
    return (
        <div className="comment-container" >
            <div className="post-comment">
                {props.post.comments.map(elements => (

                    <div className="comments-section">
                        <div><strong>{elements.username}</strong> {elements.text}</div>
                    </div>
                ))}
            </div>
            <div className="moment">{moment().startOf('hour').fromNow()}</div>
            <AddCommentForm comment={props.comment}
                index={props.index}
                addComment={props.addComment} />
        </div>
    );
}

export default CommentSection;