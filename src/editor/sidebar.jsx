import { Component } from 'react';
import './styles/sidebar.css';
import menu from './edit.png';
import dot from './dot.png'

class SideBar extends Component {
  render() {
    return(
      <div>
        <div id="sidebar">
          <div id="catego">
            <div id="catego_title">
              <div id="cate_title">
                <h2>
                  category
                </h2>
                <img src={ menu } alt="edit"></img>
              </div>
              <hr></hr>
            </div>
            <ul id="cctt_s">
              <li>
                <div className="cctt">
                  <img src={ dot } alt="dot"></img>
                  <h3>
                    sample
                  </h3>
                </div>
              </li>
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