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
      toggle_panel: 'none',
      inputs: {
        'repeating_days': []
      }
    }
    this.new_schedule = this.new_schedule.bind(this)
    this.open_close_panel = this.open_close_panel.bind(this)
    this.handle_input = this.handle_input.bind(this)
    this.handle_btns = this.handle_btns.bind(this)

    this.ctgr_input = React.createRef()
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

  handle_ctgr() {
    for (var ctg in JSON.parse(localStorage.getItem("meetings"))) {
      this.ctgr_input.current.innerHTML = ""
      this.ctgr_input.current.appendChild(new Option(ctg, ctg, false))
    }
  }

  handle_btns(event) {
    event.preventDefault()
    let new_input = this.state.inputs
    new_input['repeating_days'].push(event.target.value)
    this.setState({
      inputs: this.state.inputs
    })
    console.log(event.target.value)
  }

  new_schedule(event) {
    event.preventDefault()

    console.log('new!')
    console.log(this.state.inputs) // title, nickname, link, time, repeating_days
    console.log(this.ctgr_input.current.value) // category

    this.setState({
      inputs: {'repeating_days': []}
    })
    this.open_close_panel()
  }

  open_close_panel() {
    switch(this.state.toggle_panel) {
      default:
        break
      case 'none':
        this.handle_ctgr()
        this.setState({
          toggle_panel: 'block',
        })
        break
      case 'block':
        this.setState({ 
          toggle_panel: 'none',
        })
        break
    }
  }

  render() {
    return (
      <div>
      <div id="pannel" style={{ display: this.state.toggle_panel }}>
      <div id='background'></div>
      
      <form id="add_pnl" onSubmit={ this.new_schedule }>
        <div id="header">
          <p>Create Schedule</p>
          <i id="header_i" className="fas fa-times" onClick={ this.open_close_panel }></i>
          <hr></hr>
        </div>
        
        <div id="body">
          <hr id="vl"></hr>
          <p id="title">Schedule Title</p>
          <input id="title_input" type="text" placeholder="Classto Schedule" maxLength="30" onChange={ this.handle_input }></input>
      
          <p id="ctgr">Schedule Category</p>
          <select id="ctgr_input" ref={ this.ctgr_input }></select>
      
          <p id="pnl_time">Time To Connect</p>
          <input id="time_input" type="time" onChange={ this.handle_input }></input>
            
          <p id="day">Repeating Days Of The Week</p>
          <div id="day_input">
            <label><button onClick={ this.handle_btns } value="Sun">S</button></label>
            <label><button onClick={ this.handle_btns } value="Mon">M</button></label>
            <label><button onClick={ this.handle_btns } value="Tue">T</button></label>
            <label><button onClick={ this.handle_btns } value="Sun">S</button></label>
            <label><button onClick={ this.handle_btns } value="Thu">T</button></label>
            <label><button onClick={ this.handle_btns } value="Fri">F</button></label>
            <label><button onClick={ this.handle_btns } value="Sat">S</button></label>
          </div>
      
          <p id="nickname">Meeting Nickname</p>
          <input id="nickname_input" type="text" placeholder="Classto User" maxLength="30" onChange={ this.handle_input }></input>
      
          <p id="option">Video&Audio Option</p>
          <div id="option_input">
            <button type="checkbox" value="Video"><i className="fas fa-microphone"></i></button>
            <button type="checkbox" value="Audio"><i className="fas fa-video"></i></button>
          </div>
      
          <p id="type">Connection type</p>
          <select id="type_input">
            <option id="fst" value="idpw">Zoom Meeting ID & PW</option>
            <option id="lst" value="link">Zoom Meeting Link</option>
          </select>
      
          {/* <p id="_id">Meeting ID</p>
          <input id="id_input" type="text" maxLength="11" placeholder="Enter Meeting ID"></input>
          <p id="pw">Meeting PW</p>
          <input id="pw_input" type="text" placeholder="Enter Meeting PW"></input> */}
      
          <p id="link">Meeting Link</p>
          <input id="link_input" type="text" placeholder="Enter Meeting Link" onChange={ this.handle_input }></input>
        </div>
        <input id="btn" type="submit" value="Submit"></input>
      </form>
      </div>
      <button id="new_schedule" onClick={ this.open_close_panel } style={{ display: this.state.toggle_panel === 'block' ? 'none' : 'block'}}>
        <i id="add_btn_plus" className="fas fa-plus"></i>
        <div></div>
      </button>
      </div>
    )
  }
}

export default Panel;