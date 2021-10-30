import { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Editor from './editor.jsx';
import Introduce from './introduce.jsx';

class App extends Component {
  render() {
    if (window.localStorage.getItem("meetings") === null) {
      window.localStorage.setItem("meetings", JSON.stringify(
        {
          "example":[
            {
              "name": "Example Meeting",
              "time": "00:00",
              "link": "meeting link",
              "id": 11111111111,
              "password": 1,
              "repeating-days" : []
            }
          ]
        }
      ))
      window.localStorage.setItem("recent_editor", "example")
      window.localStorage.setItem("categorys", JSON.stringify(["example"]))
    }
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Introduce}/>
          <Route path="/:category" component={Editor}/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;