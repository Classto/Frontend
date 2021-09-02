import { Component } from 'react';
import './panel.css';

class Panel extends Component {
  render() {
    const { display } = this.props;
    console.log(display)
    return (
      <div id="pannel" style={{display: 'none'}}>
      <div id='add_pnl_background'></div>
      
      <nav id="add_pnl">
        <div id="add_pnl_header">
          <p>Create Schedule</p>
          <i id="add_pnl_header_i" className="fas fa-times"></i>
          <hr></hr>
        </div>
        
        <div id="add_pnl_body">
          <hr id="add_pnl_vl"></hr>
          <p id="add_pnl_title">Schedule Title</p>
          <input id="add_pnl_title_input" type="text" placeholder="Classto Schedule" maxLength="30" value=""></input>
      
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
            <option id="fst" value="idpw" value="Zoom Meeting ID & PW"></option>
            <option id="lst" value="link" value="Zoom Meeting Link"></option>
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
    )
  }
}

export default Panel;