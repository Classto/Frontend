import { Component } from 'react';
import './styles/navigator.css';
import logo from '../logo.png'
import user from '../user.png'

class Navigator extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div id="nav">
          <div id="logo">
            <img src={ logo } alt="asdf" id="logo_img" width="70" height="70"/>
            <h1>
              Classto
            </h1>
          </div>
          <div id="user">
            <img src={ user } alt="user" id="usera" width="50" height ="50"></img>
          </div>
        </div>
      </div>
    )
  }
}

export default Navigator