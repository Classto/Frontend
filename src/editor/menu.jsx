import { Component } from 'react';
import './menu.css';

class Menu extends Component {
  render() {
    const categorys = ['sample', 'school']
    const menu = categorys.map((category) => 
      <li key={ category }>{ category }</li>
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