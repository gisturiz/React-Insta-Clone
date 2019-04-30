import React from 'react';
import Comment from '../Comment/Comment';
import AddCommentForm from '../Comment/AddCommentForm';

function CommentSection (props) {
return (
    <div className="comment-container" >
        <Comment posts={props.posts} />
    </div>
    );
}

export default CommentSection;