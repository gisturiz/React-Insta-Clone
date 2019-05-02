import React from 'react';
import './App.css';
import PostPage from './Components/PostPage/PostPage';
import LoginPage from './Components/Login/LoginPage';
import withAuthenticate from './Components/Authentication/withAuthenticate';

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
};

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(LoginPage);

export default App;