import { Component } from 'react';
import Schedule from './editor/schedule';
import CategoryMenu from './editor/category';
import AddMenu from './editor/menu';
import Navigator from './editor/navigator';
import SideBar from './editor/sidebar';
import { ToastContainer } from 'react-toastify';
import './styles/editor.css';

class Editor extends Component {
  constructor() {
    super()
    this.state = {
      toggle_menu : 'none',
      toggle_add_menu: 'none',
    }
    // if (window.location.href === `https://classto.net/editor/${localStorage.recent_editor}`) {
    //   window.location.href = `http://classto.net/editor/${localStorage.recent_editor}`
    // }
    document.body.style.backgroundColor = "white";
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
      if (meeting.time === `${current_time.getHours()}:${current_time.getMinutes()}` && meeting["repeating-days"].includes(current_time.getDay().toString())) {
        try {
          if (meeting.meet === "zoom") {
            window.location.href = `zoommtg://zoom.us/join?action=join&confno=${meeting.id}&pwd=${meeting.pwd}&uname=${meeting.nickname}`
          } else if (meeting.meet === "link") {
            window.location.href = meeting.link
          }
        } catch(errror) {
          //줌이 설치되어있지 않을 때
        }
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

  toggle_add_menu() {
    switch(this.state.toggle_add_menu) {
      default:
        break
      case 'none':
        this.setState({
          toggle_add_menu: 'block',
        })
        break
      case 'block':
        this.setState({
          toggle_add_menu: 'none',
        })
        break
    }
  }

  render() {
    const { params } = this.props.match
    this.params = params
    const meetings = JSON.parse(window.localStorage.getItem("meetings"))[params['category']]
    const category = params["category"]
    console.log(typeof category)

    return (
      <div>
        <Navigator/>
        <SideBar/>
        <div id="sche">
          <hr id="ct_hr"></hr>
          <div id="sch_div">
            <Schedule meetings={ meetings } category={ category }/>
          </div>
          <ToastContainer theme="colored"/>
          <div id="category-div">
            <div id="category" onClick={ this.toggle_menu.bind(this) }>
              <div>
                <p>{ params['category'] }</p>
              </div>
              <i className="fas fa-chevron-down fa-2x"></i>
            </div>
            <div style={{ display: this.state.toggle_menu }}>
              <CategoryMenu/>
            </div>
          </div>
          <button id="new_schedule" onClick={ this.toggle_add_menu.bind(this) }>
            <i className="fas fa-plus"></i>
          </button>
          <div style={{ display: this.state.toggle_add_menu }}>
            <AddMenu params={ this.params }/>
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;