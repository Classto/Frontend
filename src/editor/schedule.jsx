import { Component } from 'react';
import './schedule.css';

class Schedule extends Component {
  render() {
    // try {
    //   const { m } = this.props;
    // } catch(errror) {
    //   if (errror instanceof TypeError) {
    //   }
    // }
    const { meetings } = this.props;
    const schedule = meetings.map((meet) =>
      <li key={ meet.name }>
        <div className="schedule">
          <h1>{ meet.name }</h1>
          <div id="t_vl1"></div>
          <div id="t_vl2"></div>
          <i id="title_i1" className="fas fa-edit"></i>
          <i id="title_i2" className="fas fa-external-link-alt"></i>
          <i id="time_i" className="fas fa-clock"></i>
          <span id="time">{ meet.time }</span>
          <div id="m_vl1" style={{ left: '39px' }}></div>
          <i id="name_i" className="fas fa-id-badge" style={{ left: '55px' }}></i> 
          <span id="name" style={{ left: '67px' }}>{ meet.link }</span>
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
