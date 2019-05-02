import React from 'react';
import './App.css';
import dummyData from "./dummy-data";
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filtered: []
    };
  }

  addComment = (newComment, index) => {
    console.log()
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
      <div className="App">
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

export default App;

