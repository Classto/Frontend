import { Component } from 'react';
import { Link } from 'react-router-dom';
import landscape from './landscape.svg';
import './styles/introduce.css';

class Introduce extends Component {
  componentDidMount() {
    document.title = 'Classto';
  }

  move_to_github() {
    window.location.href = "https://github.com/Classto"
  }

  render() {
    let link = "/login"
    return (
      <div id="introduce">
        <h1 id="main-title">Classto</h1>
        <h1 id="main-description">Join Your Meeting Easily</h1>
        <Link id="main-link" to={link}>
          <div id="main-editor">
            <i className="fas fa-calendar-day"></i>
            <p>Open Editor</p>
          </div>
        </Link>
        <img id="main-landscape" src={landscape} alt="icon"/>
        <nav id="main-usage">
          <div id="about">
            <h1>About Classto</h1>
            <p>Classto is open-source project to join meeting more easily.<br/>You can view our GitHub repository on <span onClick={ this.move_to_github }>here</span>.</p>
          </div>
          <div id="usage">
            <h1>Usage</h1>
            <p>
              Click <Link to={link}>Open Editor</Link> button to use Classto.<br/>Add your meetings, and just wait on time. 
            </p>
          </div>
        </nav>
        <p id="copyright">Copyright ©2021 Classto. All rights reserved.</p>
      </div>
    );
  }
}

export default Introduce;
