import { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Editor from './editor.jsx';
import Introduce from './introduce.jsx';

class App extends Component {
  render() {
    if (window.localStorage.getItem("meetings") === null) {
      window.localStorage.setItem("meetings", JSON.stringify(
        {
          "sample":[
            {
              "name": "sample meeting",
              "time": "12:59",
              "link": "meeting link",
              "id": 1234,
              "password": 1234,
              "repeating-days" : []
            },
            {
              "name": "meet",
              "time": "00:00",
              "link": "link",
              "id":1,
              "password": 1234,
              "repeating-days" : []
            }
          ]
        }
      ))
      window.localStorage.setItem("recent_editor", "sample")
      window.localStorage.setItem("categorys", JSON.stringify(["sample"]))
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