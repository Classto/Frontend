import { Component } from "react";
import './styles/login.css';
import { ToastContainer, toast } from 'react-toastify';
import api from './api.js'
import logo from './logo.png'


class Login extends Component {
  constructor() {
    super()
    this.state = {
      inputs : {}
    }
    if (!(localStorage.email === undefined)) {
      api.post("/auth/login", {"email" : localStorage.email, "pw" : localStorage.pwd})
      .then(res => {
          localStorage.session_id = res.data.session_id
          this.synchronize()
          window.location.href = `http://classto.net:8080/editor/${res.data.current_category}`
      })
      .catch(function (e) {
        }
      )
    }

    this.input_handler = this.input_handler.bind(this)
    this.login = this.login.bind(this)
    this.register = this.register.bind(this)
  }

  input_handler(e) {
    let inputs = this.state.inputs
    inputs[e.target.name] = e.target.value
    this.setState({
      inputs: inputs
    })
  }

  login() {
    api.post("/auth/login", {"email" : this.state.inputs.email, "pw" : this.state.inputs.pwd})
    .then(res => {
        localStorage.email = this.state.inputs.email
        localStorage.pwd = this.state.inputs.pwd
        localStorage.session_id = res.data.session_id
        this.synchronize()
        window.location.href = `http://classto.net:8080/editor/${res.data.current_category}`
    })
    .catch(function (e) {
      toast.error("failed to login.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: false,
        draggable: false
        })
      }
    )
  }

  register() {
    api.post("/auth/register", {"email" : this.state.inputs.email, "pw" : this.state.inputs.pwd})
    .then(res => {
      toast.success("Welcome! login to continue", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: false,
        draggable: false
      })
    })
    .catch(function (e) {
      toast.error("please try again", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: false,
        draggable: false
      });
    })
  }

  synchronize() {
    api.get(`/schedule/${localStorage.session_id}`)
      .then(res => {
        localStorage.meetings = JSON.stringify(res.data.data)
      })
    api.get(`/category/${localStorage.session_id}`)
      .then(res => {
        localStorage.categorys = JSON.stringify(res.data.data)
      })
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
          <input id="email_input" className="input" name="email" placeholder="example@email.com" onChange={ this.input_handler }/>
          <input id="pwd_input" className="input" name="pwd" placeholder="password" onChange={ this.input_handler }/>
          <div>
            <input className="button" type="button" value="Login" onClick={ this.login }/>
            <input className="button" type="button" value="Register" onClick={ this.register }/>
          </div>
        </form>
        <ToastContainer theme="colored"/>
      </div>
    )
  }
}

export default Login;