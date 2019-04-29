import React from 'react';

function CommentSection(props) {
    return (
        <React.Fragment>

            {props.posts.map(posts => (
                <div>
                    {posts.comments.map(elements => (

                        <div className="comments-section">
                            {elements.username} {elements.text}
                        </div>
                    ))
                    }
                </div>
            ))}
        </React.Fragment>

    );
}

export default CommentSection;

