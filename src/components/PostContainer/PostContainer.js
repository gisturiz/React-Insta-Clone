import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
    return (
      <div className="top-container">
        <CommentSection posts={props.posts} />
      </div>
    )
}

export default PostContainer;