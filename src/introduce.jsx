import { Component } from 'react';
import { Link } from 'react-router-dom';
import icon from './icon.svg';
import './introduce.css';

class Introduce extends Component {
  componentDidMount() {
    document.title = 'Classto';
  }

  move_to_github() {
    window.location.href = "https://github.com/Classto"
  }

  render() {
    let editor_link = window.localStorage.getItem("recent_editor")
    return (
      <div>
        <div className="introduce">
          <h1 id="m_title">Check Today's Zoom Schedule</h1>
          <div id="m_icon_div">
            <img src={icon} alt="icon"/>
          </div>
          <button id="m_get_github" onClick={ this.move_to_github }>
            <i className="fab fa-github fa-3x"></i>
          </button>
          <Link to={`editor/${editor_link}`} onClick={ this.to_editor }>
            <button id="m_get_start">
              <p id="m_get_start_text">Get Started</p>
              <i id="m_get_start_icon" className="fas fa-angle-right fa-3x"></i>
            </button>
          </Link>
        </div>
        <p id="copyright">Copyright 2021. ClassNameTo all rights reserved.</p>
      </div>
    );
  }
}

export default Introduce;
