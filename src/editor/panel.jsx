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
  constructor() {
    super()
    this.state = {
      display: 'none',
      inputs: {}
    }
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
  handle_input(event) {
    let new_input = this.state.inputs
    new_input[event.target.id] = event.target.value
    this.setState({
      inputs: this.state.inputs
    })
    console.log(this.state.inputs)
  }
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
        document.getElementById('new_schedule').style.display = 'none';
        break
      case 'block':
        this.setState({
          display: 'none'
        })
        document.getElementById('new_schedule').style.display = 'block';
        break
    }
  }
  render() {
    return (
      <div>
      <div id="pannel" style={{ display: this.state.display }}>
      <div id='background'></div>
      
      <nav id="add_pnl">
        <div id="header">
          <p>Create Schedule</p>
          <i id="header_i" className="fas fa-times" onClick={ this.open_close_panel.bind(this) }></i>
          <hr></hr>
        </div>
        
        <div id="body">
          <hr id="vl"></hr>
          <p id="title">Schedule Title</p>
          <input id="title_input" type="text" placeholder="Classto Schedule" maxLength="30" onChange={ this.handle_input.bind(this) }></input>
      
          <p id="ctgr">Schedule Category</p>
          <select id="ctgr_input">
            <option value="0">Develop</option>
            <option value="1">School</option>
          </select>
      
          <p id="pnl_time">Time To Connect</p>
          <input id="time_input" type="time"></input>
            
          <p id="day">Repeating Days Of The Week</p>
          <form id="day_input" onSubmit={ this.handle_input.bind(this )}>
            <label><button value="Sun">S</button></label>
            <label><button value="Mon">M</button></label>
            <label><button value="Tue">T</button></label>
            <label><button value="Sun">S</button></label>
            <label><button value="Thu">T</button></label>
            <label><button value="Fri">F</button></label>
            <label><button value="Sat">S</button></label>
          </form>
      
          <p id="nickname">Meeting Nickname</p>
          <input id="nickname_input" type="text" placeholder="Classto User" maxLength="30" onChange={ this.handle_input.bind(this) }></input>
      
          <p id="option">Video&Audio Option</p>
          <div id="option_input">
            <label><button type="checkbox" value="Video"><i class="fas fa-microphone"></i></button></label>
            <label><button type="checkbox" value="Audio"><i class="fas fa-video"></i></button></label>
          </div>
      
          <p id="type">Connection type</p>
          <select id="type_input">
            <option id="fst" value="idpw">Zoom Meeting ID & PW</option>
            <option id="lst" value="link">Zoom Meeting Link</option>
          </select>
      
          <p id="_id">Meeting ID</p>
          <input id="id_input" type="text" maxLength="11" placeholder="Enter Meeting ID"></input>
          <p id="pw">Meeting PW</p>
          <input id="pw_input" type="text" placeholder="Enter Meeting PW"></input>
      
          <p id="link">Meeting Link</p>
          <input id="link_input" type="text" placeholder="Enter Meeting Link"></input>
        </div>
        <button id="btn">
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