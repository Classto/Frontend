import React, { Component } from 'react';
import TimeField from 'react-simple-timefield';
import './panel.css';


class Panel extends Component {
  constructor(props) {
    super(props)
    this.current_ctgr = props.current_category
    this.state = {
      toggle_schedule_panel: 'none',
      toggle_category_panel: 'none',
      inputs: {
        'repeating-days': [],
        'options': {
          'video': false,
          'audio': false
        },
        'category': this.current_category
      },
      toggle_add_menu: 'none'
    }
    this.new_schedule = this.new_schedule.bind(this)
    this.new_category = this.new_category.bind(this)
    this.open_close_schedule_panel = this.open_close_schedule_panel.bind(this)
    this.open_close_category_panel = this.open_close_category_panel.bind(this)
    this.close_background = this.close_background.bind(this)
    this.handle_input = this.handle_input.bind(this)
    this.handle_ctgr_input = this.handle_ctgr_input.bind(this)
    this.handle_category = this.handle_category.bind(this)
    this.handle_btns = this.handle_btns.bind(this)
    this.handle_opt = this.handle_opt.bind(this)
    this.ctgr_input = React.createRef()
  }

  handle_input(event) {
    let new_input = this.state.inputs
    new_input[event.target.name] = event.target.value
    this.setState({
      inputs: new_input
    })
  }

  handle_category(event) {
    this.setState({
      category_inputs: event.target.value
    })
  }

  handle_ctgr_input() {
    let new_input = this.state.inputs
    let ctgr_select = document.querySelector('#ctgr_input')
    new_input['category'] = ctgr_select.options[ctgr_select.selectedIndex].value;
    this.setState({
      inputs: new_input
    })
  }

  handle_ctgr() {
    const ctgrs = JSON.parse(localStorage.getItem('categorys'))
    this.ctgr_input.current.innerHTML = ''
    for (let ctg in ctgrs) {
      console.log(ctgrs[ctg] === this.current_ctgr)
      if (ctgrs[ctg] === this.current_ctgr)
        this.ctgr_input.current.appendChild(new Option(ctgrs[ctg], ctgrs[ctg], false, true))
      else
        this.ctgr_input.current.appendChild(new Option(ctgrs[ctg], ctgrs[ctg], false, false))
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

  new_schedule() {
    for (var options in this.state.inputs) {
      // console.log(this.state.inputs[options])
      if (this.state.inputs[options] === [] || this.state.inputs[options] === "") {
        console.log(typeof this.state.inputs[options])
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
        'repeating-days': [],
        'options': {
          'video': false,
          'audio': false
        },
      }
    })
    this.open_close_schedule_panel()
  }

  new_category() {
    let categorys = JSON.parse(localStorage.getItem('categorys'))
    let arr = []
    for (let i = 0; i < categorys.length; i++)
      arr.push(categorys[i])
    if (this.state.category_inputs === undefined) {
      arr.push(`sample${categorys.length}`)
    } else {
      arr.push(this.state.category_inputs)
    }

    localStorage.setItem('categorys', JSON.stringify(arr))

    this.setState({
      category_inputs: ""
    })
    this.open_close_category_panel()
  }

  open_close_schedule_panel() {
    switch(this.state.toggle_schedule_panel) {
      default:
        break
      case 'none':
        this.handle_ctgr()
        this.setState({
          toggle_schedule_panel: 'block'
        })
        break
      case 'block':
        this.setState({ 
          toggle_schedule_panel: 'none'
        })
        break
    }
  }

  open_close_category_panel() {
    switch(this.state.toggle_category_panel) {
      default:
        break
      case 'none':
        this.handle_ctgr()
        this.setState({
          toggle_category_panel: 'block'
        })
        break
      case 'block':
        this.setState({ 
          toggle_category_panel: 'none'
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
          toggle_add_menu: 'block'
        })
        break
      case 'block':
        this.setState({
          toggle_add_menu: 'none'
        })
        break
    }
  }

  close_background() {
    this.setState({
      toggle_schedule_panel: 'none',
      toggle_category_panel: 'none'
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <button id="new_schedule" onClick={ this.toggle_add_menu.bind(this) }>
          <i className="fas fa-plus"></i>
        </button>
        <div id="add_menu" style={{ display: this.state.toggle_add_menu }}>
          <div/>
          <ul>
            <li onClick={ this.open_close_schedule_panel }><p>Add Schedule</p></li>
            <li onClick={ this.open_close_category_panel }><p>Add Category</p></li>
          </ul>
        </div>
        <div style={{ display: this.state.toggle_category_panel }}>
          <div id='background' onClick={ this.close_background }></div>

          <form id="category_add_pnl" onSubmit={ this.new_category }>
            <div id="header">
              <p>Create Category</p>
              <i id="header_i" className="fas fa-times" onClick={ this.open_close_category_panel }></i>
            </div>
            
            <div id="category_body">
              <p id="title">Category Title</p>
              <input id="category_title_input" type="text" placeholder="Enter Category Name" name="name" onChange={ this.handle_category }></input>
            </div>
            <input id="btn" type="submit" value="Submit"></input>
          </form>
        </div>
        <div style={{ display: this.state.toggle_schedule_panel }}>
          <div id='background' onClick={ this.close_background }></div>
          
          <form id="add_pnl" onSubmit={ this.new_schedule }>
            <div id="header">
              <p>Create Schedule</p>
              <i id="header_i" className="fas fa-times" onClick={ this.open_close_schedule_panel }></i>
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
      </div>
    )
  }
}

export default Panel;
