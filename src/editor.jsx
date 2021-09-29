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

    this.enter_zoom = this.enter_zoom.bind(this)
    this.enter_zoom()
    this.interval = setInterval(this.enter_zoom, 1000 * 60)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  enter_zoom() {
    const current_time = new Date()

    const reserved_meetings = JSON.parse(localStorage.getItem('meetings'))[this.params['category']]
    reserved_meetings.forEach(meeting => {
      if (meeting.time === `${current_time.getHours()}:${current_time.getMinutes()}`) {
        console.log('oh')
      }
    });

    console.log(current_time.getHours(), current_time.getMinutes())
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
    this.params = params
    const meetings = JSON.parse(window.localStorage.getItem("meetings"))[params['category']]

    return (
      <div>
        <hr id="ct_hr"></hr>
        <div id="sch_div">
          <Schedule meetings={ meetings }/>
        </div>
        <div id="category-div">
          <div id="category" onClick={ this.toggle_menu.bind(this) }>
            <p>{ params['category'] }</p>
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
