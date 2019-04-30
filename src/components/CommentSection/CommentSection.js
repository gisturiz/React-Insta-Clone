import React from 'react';
import Comment from '../Comment/Comment';

function CommentSection(props) {
    return (
        <div className="comment-container">
            <Comment posts={props.posts} />
        </div>

    );
}

export default CommentSection;

