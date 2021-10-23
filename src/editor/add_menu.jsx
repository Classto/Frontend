import { Component } from 'react';
import SchedulePanel from './new_schedule_panel';
import './add_menu.css';

class CategoryMenu extends Component {
  constructor(props) {
    super()
  }

  open_close_schedule_panel() {
    switch(this.state.toggle_schedule_panel) {
      default:
        break
      case 'none':
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

  set_toggle_schedule_panel() {
    alert('미치것네')
    this.setState = ({
      toggle_schedule_panel: 'none'
    })
  }

  render() {
    return(
      <div>
        <div id="add_menu">
          <div id="add_menu_div"/>
          <ul>
            <li onClick={ this.open_close_schedule_panel.bind(this) }><p>Add Schedule</p></li>
            <li onClick={ this.open_close_category_panel }><p>Add Category</p></li>
          </ul>
        </div>
        <div style={{ display: this.state.toggle_schedule_panel }}>
          <SchedulePanel current_category={ this.props.params["category"] } set_toggle_schedule_panel={ this.set_toggle_schedule_panel.bind(this) }/>
        </div>
      </div>
    )
  }
}

export default CategoryMenu;