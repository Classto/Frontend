import { Component } from 'react';
import './schedule.css';

class Schedule extends Component {
  constructor (props) {
    super(props)
    this.state = {
      meetings : props.meetings,
      category : props.category
    }
  }

  del_schedule(meeting) {
    this.state.meetings.splice(this.state.meetings.indexOf(meeting), 1)
    this.setState({
      meeting: this.state.meetings
    })
    
    let pr_meetings = JSON.parse(localStorage.getItem("meetings"))
    pr_meetings[this.state.category] = this.state.meetings
    localStorage.setItem("meetings", JSON.stringify(pr_meetings))
  }

  render() {
    // try { 이거는 필요함
    //   const { m } = this.props;
    // } catch(errror) {
    //   if (errror instanceof TypeError) {
    //   }
    // }
    const schedule = this.state.meetings.map((meet) =>
      <li key={ meet.name }>
        <div className="schedule">
          <h1>{ meet.name }</h1>
          <div id="t_vl1"></div>
          <div id="t_vl2"></div>
          <i id="title_i1" className="fas fa-edit"></i>
          <i id="title_i2" className="far fa-trash-alt" onClick={ this.del_schedule.bind(this, meet) }></i>
          <i id="time_i" className="fas fa-clock"></i>
          <span id="time">{ meet.time }</span>
          <div id="m_vl1" style={{ left: '39px' }}></div>
          <i id="name_i" className="fas fa-id-badge" style={{ left: '55px' }}></i>
          <span id="name" style={{ left: '67px' }}>{ meet.nickname }</span>
          <div id="m_vl2" style={{ left: '78px' }}></div>
          <span id="id" style={{ left: '90px' }}>{ meet.id }</span>
          <hr />
        </div>
      </li>
    )
    return (
      <div id="schedule">
        <ul>{ schedule }</ul>
      </div>
    );
  }
}

export default Schedule;
