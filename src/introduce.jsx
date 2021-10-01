import { Component } from 'react';
import { Link } from 'react-router-dom';
import icon from './icon.svg';
import './introduce.css';

class Introduce extends Component {
  componentDidMount() {
    document.title = 'Classto';
  }

  render() {
    let editor_link = window.localStorage.getItem("recent_editor")
    return (
      <div id="introduce">
        <h1>
          Classto
          <span>Join Your Zoom Easily</span>
        </h1>
      </div>
    );
  }
}

export default Introduce;
