import { Component } from 'react';
import './styles/navigator.css';
import logo from '../logo.png'
import user from '../user.png'

class Navigator extends Component {
  constructor() {
    super()
  }

  to_main() {
      window.location.href = "http://localhost:3000/"
  }

  to_login() {
      localStorage.email = undefined
      localStorage.pwd = undefined
      window.location.href = "http://localhost:3000/login"
  }

  render() {
    return (
      <div>
        <div id="nav">
          <div id="logoo" onClick={ this.to_main }>
            <img src={ logo } alt="asdf" id="logo_img" width="65" height="65"/>
            <h1>
              Classto
            </h1>
          </div>
          <div id="user">
            <img src={ user } alt="user" id="usera" width="50" height ="50" onClick={ this.to_login }></img>
          </div>
        </div>
      </div>
    )
  }
}

export default Navigator