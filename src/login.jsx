import { Component } from "react";
import './styles/login.css';
import logo from './logo.png'


class Login extends Component {
  render() {
    return (
      <div id="login">
        <div>
          <img src={ logo } alt="asdf" id="logo" width="120" height="120"/>
          <h1>
            Classto
          </h1>
        </div>
        <form id="form">
          <input id="email_input" className="input"/>
          <input id="pwd_input" className="input"/>
          <input className="button" type="button" value="login"/>
          <input className="button" type="button" value="register"/>
        </form>
      </div>
    )
  }
}

export default Login;