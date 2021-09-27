import { Component } from 'react';
import Schedule from './editor/schedule';
import Panel from './editor/panel';
import Menu from './editor/menu';
import './editor.css';

class Editor extends Component {
  constructor() {
    super()
    this.state = {
      toggle_menu : 'none'
    }
  }
  componentDidMount() {
    document.title = 'Classto - Editor';

    // let isMenuOpen = this.state.is_menu_open

    // document.getElementById('Menu').style.display = 'none';

    // document.getElementById('category').addEventListener('click', (event) => {
    //   const menuPnl = document.getElementById('Menu');
    //   if (isMenuOpen) {
    //     menuPnl.style.display = 'none';
    //     isMenuOpen = false;
    //   } else if (!isMenuOpen) {
    //     menuPnl.style.display = 'block';
    //     isMenuOpen = true;
    //   }
    // });
  }

  toggle_menu() {
    switch(this.state.toggle_menu) {
      default:
        break
      case 'none':
        this.setState({
          toggle_menu: 'block',
        })
        break
      case 'block':
        this.setState({
          toggle_menu: 'none',
        })
        break
    }
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
        <div id="category-div">
          <div id="category" onClick={ this.toggle_menu.bind(this) }>
            <p>{ params['category']}</p>
            <i className="fas fa-chevron-down fa-2x"></i>
          </div>
          <div style={{ display: this.state.toggle_menu }}>
            <Menu/>
          </div>
        </div>
        <Panel/>
      </div>
    );
  }
}

export default Editor;
