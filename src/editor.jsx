import { Component } from 'react';
import Schedule from './editor/schedule';
import Panel from './editor/panel';
import './editor.css';

class Editor extends Component {
  render() {
    const { params } = this.props.match
    const meetings = JSON.parse(window.localStorage.getItem("meetings"))[params['category']]
    return (
      <div>
        <div id="category">
          <p>Sample</p>
          <i className="fas fa-chevron-down fa-2x"></i>
        </div>
        <hr id="ct_hr"></hr>
        <div id="sch_div">
          <Schedule meetings={ meetings }/>
        </div>
        {/* <button id="new_schedule" onClick={ () => {display = true} }>
          <i id="add_btn_plus" className="fas fa-plus"></i>
          <div></div>
        </button> */}
        <Panel/>
      </div>
    );
  }
}

export default Editor;
