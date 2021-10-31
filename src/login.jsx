import { Component } from "react";
import './styles/login.css';
import api from './api.js'
import logo from './logo.png'


class Login extends Component {
  constructor() {
    super()
    this.state = {
      info : {}
    }

    if (!localStorage.email === undefined) {
      localStorage.session_id = api.post("/auth/login", {"email" : localStorage.email, "pw" : localStorage.pwd})
        .then(res => res.data)
        .then(res => {
            localStorage.session_id = res.session_id
            window.location.href = `http://localhost:3000/editor/${res.current_category}`
      })
    }

    this.input_handler = this.input_handler.bind(this)
  }

  input_handler(e) {
    let info = this.state.info
    info[e.target.name] = e.target.value
    this.setState({
      info: info
    })
  }

  login() {
    
  }

  register() {
    
  }

  render() {
    return (
      <div id="login">
        <div>
          <img src={ logo } alt="asdf" id="logo" width="120" height="120"/>
          <h1>
            Classto
          </h1>
        </div>
        <form id="form">
          <input id="email_input" className="input" name="email" onChange={ this.input_handler }/>
          <input id="pwd_input" className="input" name="pwd" onChange={ this.input_handler }/>
          <div>
            <input className="button" type="button" value="Login" onChange={ this.login }/>
            <input className="button" type="button" value="Register" onChange={ this.register }/>
          </div>
        </form>
      </div>
    )
  }
}

export default Login;