import { Component } from 'react';
import './styles/navigator.css';
import logo from '../logo.png'
import user from '../user.png'

class Navigator extends Component {
  to_main() {
      window.location.href = "http://classto.net:8080/"
  }

  to_login() {
      localStorage.email = undefined
      localStorage.pwd = undefined
      window.location.href = "http://classto.net:8080/login"
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
            <img src={ user } alt="user" id="usera" width="30" height ="30" onClick={ this.to_login }></img>
          </div>
        </div>
      </div>
    )
  }
}

export default Navigator