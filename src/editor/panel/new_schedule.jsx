import React, { Component } from 'react';
import TimeField from 'react-simple-timefield';
import { ToastContainer, toast } from 'react-toastify';
import './new_schedule.css';
import 'react-toastify/dist/ReactToastify.css';


class Panel extends Component {
  constructor(props) {
    super(props)
    this.current_ctgr = this.props.current_category
    this.state = {
      inputs: {
        'name': "",
        'repeating-days': [],
        'time': "00:00",
        'nickname': "",
        'id': "",
        'pwd': "",
        'link': "",
        'options': {
          'video': false,
          'audio': false
        },
        'category': this.current_ctgr,
        'meet' : "zoom"
      }
    }
    this.new_schedule = this.new_schedule.bind(this)
    this.close_schedule_panel = this.close_schedule_panel.bind(this)
    this.handle_input = this.handle_input.bind(this)
    this.handle_ctgr_input = this.handle_ctgr_input.bind(this)
    this.handle_ctgr = this.handle_ctgr.bind(this)
    this.handle_btns = this.handle_btns.bind(this)
    this.handle_opt = this.handle_opt.bind(this)
    this.change_meet = this.change_meet.bind(this)

    this.ctgr_input = React.createRef()
    this.zoom = React.createRef()
    this.link = React.createRef()
  }

  componentDidMount() {
    this.handle_ctgr()
  }

  handle_ctgr() {
    const ctgrs = JSON.parse(localStorage.getItem('categorys'))
    this.ctgr_input.current.innerHTML = ''
    for (let ctg in ctgrs) {
      if (ctgrs[ctg] === this.current_ctgr)
        this.ctgr_input.current.appendChild(new Option(ctgrs[ctg], ctgrs[ctg], false, true))
      else
        this.ctgr_input.current.appendChild(new Option(ctgrs[ctg], ctgrs[ctg], false, false))
    }
  }

  handle_input(event) {
    let new_input = this.state.inputs
    new_input[event.target.name] = event.target.value
    this.setState({
      inputs: new_input
    })
  }

  close_schedule_panel() {
    this.props.set_toggle_schedule_panel()
  }

  handle_ctgr_input() {
    let new_input = this.state.inputs
    let ctgr_select = document.querySelector('#ctgr_input')
    new_input['category'] = ctgr_select.options[ctgr_select.selectedIndex].value;
    this.setState({
      inputs: new_input
    })
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
      inputs: new_input
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
      inputs: new_input
    })
  }

  change_meet(event) {
    event.preventDefault()
    if (event.target.value === "link") {
      this.zoom.current.style.display = "none"
      this.link.current.style.display = "block"
    } else if (event.target.value === "zoom") {
      this.zoom.current.style.display = "block"
      this.zoom.current.style.display = "none"
    }
    this.setState({
      'meet' : event.target.value
    })
  }

  new_schedule() {
    for (var options in this.state.inputs) {
      if (options !== "pwd" && this.state.inputs[options] === [] | this.state.inputs[options] === "") {
        toast.error(`'${options}' value can't be blank.`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          pauseOnHover: false,
          draggable: false
        });
        return
      }
    }
    let meetings = JSON.parse(localStorage.getItem('meetings'))
    if (!meetings.hasOwnProperty(this.ctgr_input.current.value))
      meetings[this.ctgr_input.current.value] = []
    meetings[this.ctgr_input.current.value].push(this.state.inputs)
    localStorage.setItem('meetings', JSON.stringify(meetings))
    // console.log(meetings)
    // console.log('new!')
    // console.log(this.state.inputs) // title, nickname, link, time, repeating_days, options
    // console.log(this.ctgr_input.current.value) // category

    this.setState({
      inputs: {
        'name': "",
        'repeating-days': [],
        'time': "00:00",
        'nickname': "",
        'id': "",
        'pwd': "",
        'link': "",
        'options': {
          'video': false,
          'audio': false
        },
        'category': this.current_ctgr,
        'meet' : 'zoom'
      }
    })
    this.close_schedule_panel()
  }

  render() {
    return (
      <div>
        <div>
          <div id='background' onClick={ this.close_schedule_panel }></div>
          <form id="add_pnl">
            <div id="header">
              <p>Create Schedule</p>
              <i id="header_i" className="fas fa-times" onClick={ this.close_schedule_panel }></i>
            </div>
            
            <div id="body">
              <hr id="vl"></hr>
              <p id="title">Schedule Title</p>
              <input id="title_input" type="text" placeholder="Enter Schedule Name" name="name" onChange={ this.handle_input }></input>
          
              <p id="ctgr">Schedule Category</p>
              <select id="ctgr_input" ref={ this.ctgr_input } onChange={ this.handle_ctgr_input }></select>
          
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
              <select id="type_input" onChange={ this.change_meet }>
                <option id="fst" value="zoom">Zoom Meeting ID & PW</option>
                <option id="lst" value="link">Google Meet</option>
                <option id="lst" value="link">Online Class</option>
              </select>

              <div ref={ this.zoom }>
              <p id="_id">Meeting ID</p>
              <input id="id_input" type="text" maxLength="11" placeholder="Enter Meeting ID" name="id" onChange={ this.handle_input }></input>
              <p id="pw">Meeting PW</p>
              <input id="pw_input" type="text" placeholder="Enter Meeting PW" name="pwd" onChange={ this.handle_input }></input>
              </div>

              <div ref={ this.link } style={{display: 'none'}}>
              <p id="link">Meeting Link</p>
              <input id="link_input" type="text" placeholder="Enter Meeting Link" name="link" onChange={ this.handle_input }></input>
              </div>
            </div>
            <input id="btn" type="button" value="Submit" onClick={ this.new_schedule }></input>
          </form>
        </div>
        <ToastContainer theme="colored"/>
      </div>
    )
  }
}

export default Panel;
