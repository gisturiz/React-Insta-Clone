import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import ButtonInteraction from '../Comment/ButtonInteraction';

function PostContainer(props) {
  return (
    <div className="top-container">
      <div className="post-container">
        <div className="post-content"><img src={props.post.thumbnailUrl} alt={props.post.username} /> {props.post.username}</div>
        <div className="post-image">
          <img src={props.post.imageUrl} alt={props.post.username} />
        </div>
        <ButtonInteraction counter={props.counter} />
       
        <CommentSection post={props.post} index={props.index} addComment={props.addComment} />
        
      </div>
    </div>
  )
}

export default PostContainer;