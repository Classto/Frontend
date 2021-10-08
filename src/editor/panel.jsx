import React, { Component } from 'react';
import TimeField from 'react-simple-timefield';
import './panel.css';


class Panel extends Component {
  constructor() {
    super()
    this.state = {
      toggle_panel: 'none',
      inputs: {
        'repeating-days': [],
        'options': {
          'video': false,
          'audio': false
        },
      }
    }
    this.new_schedule = this.new_schedule.bind(this)
    this.open_close_panel = this.open_close_panel.bind(this)
    this.handle_input = this.handle_input.bind(this)
    this.handle_btns = this.handle_btns.bind(this)
    this.handle_opt = this.handle_opt.bind(this)

    this.ctgr_input = React.createRef()
  }

  handle_input(event) {
    let new_input = this.state.inputs
    new_input[event.target.name] = event.target.value
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
    if (!!!new_input['repeating-days'].includes(event.target.value)) {
      new_input['repeating-days'].push(event.target.value)
      event.target.style.backgroundColor = '#327DFF'
    } else {
      new_input['repeating-days'].splice(new_input['repeating-days'].indexOf(event.target.value), 1)
      event.target.style.backgroundColor = '#c8cfd4'
    }
    this.setState({
      inputs: this.state.inputs
    })
  }

  handle_opt(event) {
    event.preventDefault()
    let new_input = this.state.inputs
    if (!!!this.state.inputs.options[event.target.name]) {
      event.target.style.backgroundColor = '#327DFF'
    } else {
      event.target.style.backgroundColor = '#c8cfd4'
    }
    new_input['options'][event.target.name] = !!!this.state.inputs.options[event.target.name]
    this.setState({
      inputs: this.state.inputs
    })
  }

  new_schedule(e) {
    e.preventDefault()
    for (var options in this.state.inputs) {
      // console.log(this.state.inputs[options])
      if (this.state.inputs[options] === [] || this.state.inputs[options] === "") {
        console.log(typeof this.state.inputs[options])
      } else {
        console.log('asdasd')
      }
    }
    let meetings = JSON.parse(localStorage.getItem('meetings'))
    meetings[this.ctgr_input.current.value].push(this.state.inputs)

    localStorage.setItem('meetings', JSON.stringify(meetings))
    // console.log(meetings)
    // console.log('new!')
    // console.log(this.state.inputs) // title, nickname, link, time, repeating_days, options
    // console.log(this.ctgr_input.current.value) // category

    this.setState({
      inputs: {
        'repeating-days': [],
        'options': {
          'video': false,
          'audio': false
        },
      }
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
          <input id="title_input" type="text" placeholder="Enter Schedule Name" name="name" maxLength="30" onChange={ this.handle_input }></input>
      
          <p id="ctgr">Schedule Category</p>
          <select id="ctgr_input" ref={ this.ctgr_input }></select>
      
          <p id="pnl_time">Time To Connect</p>
          <TimeField id="time_input" value="00:00" name="time" onChange={ this.handle_input }></TimeField>
            
          <p id="day">Repeating Days Of The Week</p>
          <div id="day_input">
            <label><button onClick={ this.handle_btns } value="0">S</button></label>
            <label><button onClick={ this.handle_btns } value="1">M</button></label>
            <label><button onClick={ this.handle_btns } value="2">T</button></label>
            <label><button onClick={ this.handle_btns } value="3">W</button></label>
            <label><button onClick={ this.handle_btns } value="4">T</button></label>
            <label><button onClick={ this.handle_btns } value="5">F</button></label>
            <label><button onClick={ this.handle_btns } value="6">S</button></label>
          </div>
      
          <p id="nickname">Meeting Nickname</p>
          <input id="nickname_input" type="text" placeholder="Enter Nickname" maxLength="30" name="nickname" onChange={ this.handle_input }></input>
      
          <p id="type">Connection type</p>
          <select id="type_input">
            <option id="fst" value="idpw">Zoom Meeting ID & PW</option>
            {/* <option id="lst" value="link">Zoom Meeting Link</option> */}
          </select>
      
          <p id="_id">Meeting ID</p>
          <input id="id_input" type="text" maxLength="11" placeholder="Enter Meeting ID" name="id" onChange={ this.handle_input }></input>
          <p id="pw">Meeting PW</p>
          <input id="pw_input" type="text" placeholder="Enter Meeting PW" name="pwd" onChange={ this.handle_input }></input>
      
          {/* <p id="link">Meeting Link</p>
          <input id="link_input" type="text" placeholder="Enter Meeting Link" name="link" onChange={ this.handle_input }></input> */}
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