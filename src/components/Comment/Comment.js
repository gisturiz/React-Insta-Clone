import React from 'react';

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
                                {elements.username} {elements.text}
                            </div>
                        ))}
                    </div>
                </div>
            ))}

        </React.Fragment>

    )
}

export default Comment;