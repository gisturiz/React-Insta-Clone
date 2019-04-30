import React from 'react';
import './Comment.css';

function Comment(props) {

    return (
        <React.Fragment>

            {props.posts.map(posts => (
                <div className="post-container">
                    <div className="post-content"><img src={posts.thumbnailUrl} alt={posts.username} /> {posts.username}</div>
                    <div className="post-image">
                        <img src={posts.imageUrl} alt={posts.username} />
                    </div>
                    <div className="post-comment">
                        {posts.comments.map(elements => (

                            <div className="comments-section">
                                <strong>{elements.username}</strong> {elements.text}
                            </div>
                        ))}
                    </div>
                    <form className="add-comment">
                    <input type="text" placeholder="Add comment..." />
                    </form>
                </div>
            ))}

        </React.Fragment>

    )
}

export default Comment;