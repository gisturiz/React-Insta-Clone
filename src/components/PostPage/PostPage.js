import React from 'react';
import dummyData from '../../dummy-data';
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar';
// import withAuthenticate from './components/authentication/withAuthenticate';

class PostPage extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filtered: []
    };
  }

  addComment = (newComment, index) => {
    let updatedPost = [...this.state.posts]
    updatedPost[index].comments = [...updatedPost[index].comments, newComment]
    this.setState({ posts: updatedPost })
  }

  componentDidMount() {
    this.setState({
      posts: dummyData,
    });
  }

  searchHandler = e => {
    const posts = this.state.posts.filter(ele => {
      if(ele.username.includes(e.target.value)) {
        return ele;
      }
    });
    this.setState({ filtered: posts});
  };

  render() {
    return (
      <div className="post-page">
        <SearchBar search={this.searchHandler}/>
        {this.state.filtered.length === 0 ? this.state.posts.map((post, index) => <PostContainer 
        post={post} index={index} 
        addComment={this.addComment}/>):
        this.state.filtered.map((post, index) => <PostContainer 
        post={post} index={index} 
        addComment={this.addComment}/>)
        }
      </div>
    );
  }
};

export default PostPage;