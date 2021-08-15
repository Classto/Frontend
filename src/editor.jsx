import { Component } from 'react';
import './editor.css';

class Editor extends Component {
  render() {
    return (
      <div>
        <div id="category">
          <p>Sample</p>
          <i className="fas fa-chevron-down fa-2x"></i>
        </div>
        <hr id="ct_hr"></hr>
        <div id="sch_div"></div>
        <button id="new_schedule">
          <i id="add_btn_plus" className="fas fa-plus"></i>
          <div></div>
        </button>
      </div>
    );
  }
}

export default Editor;