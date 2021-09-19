import { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

class Menu extends Component {
  render() {
    const categorys = ['sample', 'school', 'game', 'this is very long category']
    const menu = categorys.map((category) => 
      <li key={ category }><Link to={ "/editor/" + category }>{ category }</Link></li>
    )
    return(
      <div id="Menu">
        <div/>

        <ul>{ menu }</ul>
      </div>
      )
  }
}

export default Menu;