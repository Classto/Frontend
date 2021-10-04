import { Component } from 'react';
import { Link } from 'react-router-dom';
import landscape from './landscape.svg';
import './introduce.css';

class Introduce extends Component {
  componentDidMount() {
    document.title = 'Classto';
  }

  render() {
    let editor_link = window.localStorage.getItem("recent_editor")
    return (
      <div id="introduce">
        <h5 id="main-title">Classto</h5>
        <h1 id="main-description">Join Your Meeting Easily</h1>
        <Link id="main-link" to={`editor/${editor_link}`}>
          <div id="main-editor">
            <i className="fas fa-calendar-day"></i>
            <p>Open Editor</p>
          </div>
        </Link>
        <img id="main-landscape" src={landscape} alt="icon"/>
      </div>
    );
  }
}

export default Introduce;
