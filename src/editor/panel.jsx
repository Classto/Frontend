import React, { Component } from 'react';
import './panel.css';

class newMeeting {
  constructor(title, category, time, days, id, password, link, options = {}) {
    this.title =      title;
    this.category =   category;
    this.time =       time;
    this.days =       days;
    this.id =         id;
    this.password =   password;
    this.link =       link;
    this.nickname =   options['nickname'] !== undefined ? options['nickname'] : null;
    this.camera =     options['camera'] !== undefined ? options['camera'] : null;
    this.microphone = options['microphone'] !== undefined ? options['microphone'] : null;
  }
  info() {
    return({
      "name" : this.title,
      "time" : this.time,
      "link" : this.link,
      "id"   : this.id,
      "password" : this.password,
      "category" : this.category,
      "options"  : {
        "camera"     : this.camera,
        "microphone" : this.microphone,
        "nickname"   : this.nickname
      }
    })
  }
}
class Panel extends Component {
  state = {
    display: 'none',
  }
  // componentDidUpdate() {
  //   if(this.state.display === 'block') {
  //     return null
  //   }
  //   this.setState({
  //     new_meeting: new newMeeting()
  //   })
  //   console.log('hello')
  // }
  new_schedule() {
    new newMeeting()
  }
  open_close_panel() {
    switch(this.state.display) {
      default:
        break
      case 'none':
        this.setState({
          display: 'block'
        })
        break
      case 'block':
        this.setState({
          display: 'none'
        })
        break
    }
  }
  render() {
    return (
      <div>
      <div id="pannel" style={{ display: this.state.display }}>
      <div id='add_pnl_background'></div>
      
      <nav id="add_pnl">
        <div id="add_pnl_header">
          <p>Create Schedule</p>
          <i id="add_pnl_header_i" className="fas fa-times" onClick={ this.open_close_panel.bind(this) }></i>
          <hr></hr>
        </div>
        
        <div id="add_pnl_body">
          <hr id="add_pnl_vl"></hr>
          <p id="add_pnl_title">Schedule Title</p>
          <input id="add_pnl_title_input" type="text" placeholder="Classto Schedule" maxLength="30"></input>
      
          <p id="add_pnl_ctgr">Schedule Category</p>
          <select id="add_pnl_ctgr_input">
            <option value="0">Develop</option>
            <option value="1">School</option>
          </select>
      
          <p id="add_pnl_time">Time To Connect</p>
          <input id="add_pnl_time_input" type="time"></input>
            
          <p id="add_pnl_day">Repeating Days Of The Week</p>
          <div id="add_pnl_day_input">
            <label><input type="checkbox" value="Sun"></input></label>
            <label><input type="checkbox" value="Mon"></input></label>
            <label><input type="checkbox" value="Tue"></input></label>
            <label><input type="checkbox" value="Sun"></input></label>
            <label><input type="checkbox" value="Thu"></input></label>
            <label><input type="checkbox" value="Fri"></input></label>
            <label><input type="checkbox" value="Sat"></input></label>
          </div>
      
          <p id="add_pnl_nickname">Meeting Nickname</p>
          <input id="add_pnl_nickname_input" type="text" placeholder="Classto User" maxLength="30"></input>
      
          <p id="add_pnl_option">Video&Audio Option</p>
          <div id="add_pnl_option_input">
            <label><input type="checkbox" value="Video"></input></label>
            <label><input type="checkbox" value="Audio"></input></label>
          </div>
      
          <p id="add_pnl_type">Connection type</p>
          <select id="add_pnl_type_input">
            <option id="fst" value="idpw">Zoom Meeting ID & PW</option>
            <option id="lst" value="link">Zoom Meeting Link</option>
          </select>
      
          <p id="add_pnl_id">Meeting ID</p>
          <input id="add_pnl_id_input" type="text" maxLength="11" placeholder="Enter Meeting ID"></input>
          <p id="add_pnl_pw">Meeting PW</p>
          <input id="add_pnl_pw_input" type="text" placeholder="Enter Meeting PW"></input>
      
          <p id="add_pnl_link">Meeting Link</p>
          <input id="add_pnl_link_input" type="text" placeholder="Enter Meeting Link"></input>
        </div>
        <button id="add_pnl_btn">
          <p>Submit</p>
        </button>
      </nav>
      </div>
      <button id="new_schedule" onClick={ this.open_close_panel.bind(this) }>
        <i id="add_btn_plus" className="fas fa-plus"></i>
        <div></div>
      </button>
      </div>
    )
  }
}

export default Panel;