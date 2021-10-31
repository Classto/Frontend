import { Component } from "react";
import './styles/login.css';
import logo from './logo.png'


class Login extends Component {
  render() {
    return (
      <div>
        <div id="classto">
          <img src={ logo } alt="asdf" id="logo" width="80" height="80"/>
          <h1>
            Classto
          </h1>
        </div>
        <form id="form">
          <input id="email_input" className="input"/>
          <input id="pwd_input" className="input"/>
        </form>
      </div>
    )
  }
}

export default Login;