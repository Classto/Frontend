import { Component } from 'react';
import './styles/sidebar.css';

class SideBar extends Component {
  render() {
    return(
      <div>
        <div id="sidebar">
          <div id="catego">
            <div id="catego_title">
              <h2>
                category
              </h2>
            </div>
            <ul>
              {/* { category_li } */}
            </ul>
          </div>
          <div id="credit">
            <div id="gitthub">
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SideBar