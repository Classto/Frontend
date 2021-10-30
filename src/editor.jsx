import { Component } from 'react';
import Schedule from './editor/schedule';
import CategoryMenu from './editor/category';
import AddMenu from './editor/menu';
import './editor.css';

class Editor extends Component {
  constructor() {
    super()
    this.state = {
      toggle_category_menu : 'none',
      toggle_add_menu: 'none'
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
    let hour = `${current_time.getHours()}`.length === 1 ? `0${current_time.getHours()}` : `${current_time.getHours()}`
    let minute = `${current_time.getMinutes()}`.length === 1 ? `0${current_time.getMinutes()}` : `${current_time.getMinutes()}`
    reserved_meetings.forEach(meeting => {
      if (meeting.time === `${hour}:${minute}` && meeting["repeating-days"].includes(current_time.getDay().toString()))
        window.location.href = `zoommtg://zoom.us/join?action=join&confno=${meeting.id}&pwd=${meeting.pwd}&uname=${meeting.nickname}`
    });
  }

  toggle_category_menu() {
    switch(this.state.toggle_category_menu) {
      default:
        break
      case 'none':
        this.setState({
          toggle_category_menu: 'block',
        })
        break
      case 'block':
        this.setState({
          toggle_category_menu: 'none',
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
    const { params } = this.props.match //여기 코드 너무 엉망이어서 나중에 최적화 할게요 일단 놔두셈
    this.params = params
    let meetings = []
    for (let i = 0; i < JSON.parse(window.localStorage.getItem("meetings"))[this.params["category"]].length; i++) {
      if (JSON.parse(window.localStorage.getItem("meetings"))[this.params["category"]][i].category === this.params['category']) {
        meetings.push(JSON.parse(window.localStorage.getItem("meetings"))[this.params["category"]][i])
      }
    }
    return (
      <div>
        <hr id="ct_hr"></hr>
        <div id="sch_div">
          <Schedule meetings={ meetings } category={ this.params["category"] }/>
        </div>
        <div id="category-div">
          <div id="category" onClick={ this.toggle_category_menu.bind(this) }>
            <div>
              <p>{ params['category'] }</p>
            </div>
            <i className="fas fa-chevron-down fa-2x"></i>
          </div>
          <div style={{ display: this.state.toggle_category_menu }}>
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
    );
  }
}

export default Editor;
