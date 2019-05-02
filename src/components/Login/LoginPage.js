import React from 'react';
import './LoginPage.css';
import { Button } from 'reactstrap';



class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }

  login = () => {
    localStorage.setItem('username', this.state.username)
    window.location.reload();
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.login} className="login-container">
        <input onChange={this.handleChanges} className="input" type="text" placeholder="Username" name="username" value={this.state.username} />
        <input onChange={this.handleChanges} className="input" type="text" placeholder="Password" name="password" value={this.state.password} />
        <Button color="primary">Login</Button>{' '}
      </form>
    )
  }
}

export default LoginPage;