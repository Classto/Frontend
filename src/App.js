import { Component } from 'react';
import icon from './icon.svg';
import './App.css';

class Introduce extends Component {
  render() {
    return (
      <div>
        <div className="introduce">
          <h1 id="m_title">Check Today's Zoom Schedule</h1>
          <div id="m_icon_div">
            <img src={icon} alt="icon"/>
          </div>
  
          <button id="m_get_github" onclick="location.href = 'https\://github.com/Classto'">
            <i className="fab fa-github fa-3x"></i>
          </button>
  
          <button id="m_get_start" onClick="location.href='/editor'">
            <p id="m_get_start_text">Get Started</p>
            <i id="m_get_start_icon" className="fas fa-angle-right fa-3x"></i>
          </button>
        </div>
        <p id="copyright">Copyright 2021. ClassNameTo all rights reserved.</p>
      </div>
    );
  }
}

export default Introduce;
