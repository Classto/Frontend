import { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Editor from './editor.jsx';
import Introduce from './introduce.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Introduce}/>
          <Route path="/editor" component={Editor}/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;