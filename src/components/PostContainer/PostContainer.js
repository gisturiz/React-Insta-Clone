import React from 'react';
import Comment from '../Comment/Comment';

function PostContainer(props) {
    return (
      <div className="top-container">
        <Comment posts={props.posts} />
      </div>
    )
}

export default PostContainer;