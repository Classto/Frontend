import { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

class Menu extends Component {
  render() {
    const categorys = ['sample', 'school', 'GAME', 'This is very long category']
    const menu = categorys.map((category) => 
      <li key={ category }><Link to={ "/editor/" + category }><div>{ category }</div></Link></li>
    )
    return(
      <div id="Menu">
        <div/>
        <ul>
          { menu }
          <li><i class="fas fa-plus"></i></li>
          </ul>
      </div>
      )
  }
}

export default Menu;