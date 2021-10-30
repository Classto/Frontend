import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './new_category.css';
import 'react-toastify/dist/ReactToastify.css';


class Panel extends Component {
  constructor(props) {
    super(props)
    this.current_ctgr = props.current_category
    this.state = {
      inputs: {
        'name': "",
        'repeating-days': [],
        'time': "00:00",
        'nickname': "",
        'id': "",
        'pwd': "",
        'options': {
          'video': false,
          'audio': false
        },
        'category': this.current_ctgr
      }
    }
    this.new_category = this.new_category.bind(this)
    this.open_close_category_panel = this.open_close_category_panel.bind(this)
    this.handle_category = this.handle_category.bind(this)
    this.ctgr_input = React.createRef()
  }

  handle_category(event) {
    this.setState({
      category_inputs: event.target.value
    })
  }

  new_category() {
    let categorys = JSON.parse(localStorage.getItem('categorys'))
    let meetings = JSON.parse(localStorage.getItem('meetings'))
    let arr = []
    for (let i = 0; i < categorys.length; i++)
      arr.push(categorys[i])

    if (this.state.category_inputs === undefined || this.state.category_inputs === "") {
      toast.error('Category name can\'t be blank.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        pauseOnHover: false,
        draggable: false
      });
      return
    } else if (categorys.includes(this.state.category_inputs)) {
      toast.error('There\'s already a category with the same name.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        pauseOnHover: false,
        draggable: false
      });
      return
    } else {
      arr.push(this.state.category_inputs)
      if (!meetings.hasOwnProperty(this.state.category_inputs))
        meetings[this.state.category_inputs] = []
    }

    localStorage.setItem('meetings', JSON.stringify(meetings))
    localStorage.setItem('categorys', JSON.stringify(arr))

    this.setState({
      category_inputs: ""
    })
    this.open_close_category_panel()
  }

  open_close_category_panel() {
    this.props.set_toggle_category_panel()
  }

  render() {
    return (
      <div>
        <div style={{ display: this.state.toggle_category_panel }}>
          <div id='background' onClick={ this.open_close_category_panel }></div>
          <form id="category_add_pnl">
            <div id="header">
              <p>Create Category</p>
              <i id="header_i" className="fas fa-times" onClick={ this.open_close_category_panel }></i>
            </div>
            
            <div id="category_body">
              <p id="title">Category Title</p>
              <input id="category_title_input" type="text" placeholder="Enter Category Name" name="name" onChange={ this.handle_category }></input>
            </div>
            <input id="btn" type="button" value="Submit" onClick={ this.new_category } />
          </form>
        </div>
        <ToastContainer theme="colored"/>
      </div>
    )
  }
}

export default Panel;