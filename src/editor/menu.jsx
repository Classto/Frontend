import { Component } from 'react';
import SchedulePanel from './panel/new_schedule';
import CategoryPanel from './panel/new_category';
import './styles/menu.css';

class AddMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle_schedule_panel: 'none',
      toggle_category_panel: 'none'
    }
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

  open_close_category_panel() {
    switch(this.state.toggle_category_panel) {
      default:
        break
      case 'none':
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

  set_toggle_schedule_panel = () => {
    this.setState({
      toggle_schedule_panel: 'none'
    })
  }

  set_toggle_category_panel = () => {
    this.setState({
      toggle_category_panel: 'none'
    })
  }

  render() {
    return(
      <div>
        <div id="add_menu">
          <div id="add_menu_div"/>
          <ul>
            <li onClick={ this.open_close_schedule_panel.bind(this) }><p>Add Schedule</p></li>
            <li onClick={ this.open_close_category_panel.bind(this) }><p>Add Category</p></li>
          </ul>
        </div>
        <div style={{ display: this.state.toggle_schedule_panel }}>
          <SchedulePanel current_category={ this.props.params["category"] } set_toggle_schedule_panel={ this.set_toggle_schedule_panel.bind(this) }/>
        </div>
        <div style={{ display: this.state.toggle_category_panel }}>
          <CategoryPanel current_category={ this.props.params["category"] } set_toggle_category_panel={ this.set_toggle_category_panel.bind(this) }/>
        </div>
      </div>
    )
  }
}

export default AddMenu;