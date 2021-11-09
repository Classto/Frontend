import { Component } from 'react';
import './styles/navigator.css';
import logo from '../logo.png'
import user from '../user.png'

class Navigator extends Component {
  to_main() {
      window.location.href = "https://classto.net/"
  }

  to_login() {
      localStorage.email = undefined
      localStorage.pwd = undefined
      window.location.href = "https://classto.net/login"
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
            <input type="button" onClick={ this.to_login } id="usera" value="Log out"/>
            {/* <img src={ user } alt="user" id="usera" width="30" height ="30" onClick={ this.to_login }></img> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Navigator