import React from 'react';
import './App.css';
import dummyData from "./dummy-data";
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
      comment: ""
    };
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addComment = event => {
    event.preventDefault();
    const newComment = {
      task: this.state.comment, 
      id: Date.now(),
    };

    this.setState({
      posts: [...this.state.posts, newComment],
      comment: "",
    });
  };

  render() {
    return (
      <div className="App">
        <PostContainer posts={this.state.posts} />
        <CommentSection posts={this.state.posts} />
      </div>
      );
    }
  }
  
  
  export default App;
