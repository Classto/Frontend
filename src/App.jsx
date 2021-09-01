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
              "id":1234
            },
            {
              "name": "meet",
              "time": "00:00",
              "link": "link",
              "id":1
            }
          ]
        }
      ))
      window.localStorage.setItem("recent_editor", "sample")
    }
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Introduce}/>
          <Route path="/editor/:category" component={Editor}/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;