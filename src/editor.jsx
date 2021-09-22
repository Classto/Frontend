import { Component } from 'react';
import Schedule from './editor/schedule';
import Panel from './editor/panel';
import Menu from './editor/menu';
import './editor.css';

class Editor extends Component {
  componentDidMount() {
    document.title = 'Editor - Classto';

    let isMenuOpen = false;

    document.getElementById('Menu').style.display = 'none';

    document.getElementById('category').addEventListener('click', (event) => {
      const menuPnl = document.getElementById('Menu');
      if (isMenuOpen) {
        menuPnl.style.display = 'none';
        isMenuOpen = false;
      } else if (!isMenuOpen) {
        menuPnl.style.display = 'block';
        isMenuOpen = true;
      }
    });
  }

  render() {
    const { params } = this.props.match
    const meetings = JSON.parse(window.localStorage.getItem("meetings"))[params['category']]
    return (
      <div>
        <hr id="ct_hr"></hr>
        <div id="sch_div">
          <Schedule meetings={ meetings }/>
        </div>
        {/* <button id="new_schedule" onClick={ () => {display = true} }>
          <i id="add_btn_plus" className="fas fa-plus"></i>
          <div></div>
        </button> */}
        <div id="category-div">
          <div id="category">
            <p>{ params['category']}</p>
            <i className="fas fa-chevron-down fa-2x"></i>
          </div>
          <Menu/>
        </div>
        <Panel/>
      </div>
    );
  }
}

export default Editor;
