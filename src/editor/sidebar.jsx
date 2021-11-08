import { Component } from 'react';
import './styles/sidebar.css';
import menu from './edit.png';
import dot from './dot.png'
import github from './github.png'

class SideBar extends Component {
  to_github() {
    window.location.href = "https://github.com/Classto"
  }

  render() {
    const category_li = JSON.parse(localStorage.categorys).map((categg) =>
      <li key={ categg }>
        <div className="cctt">
          <img src={ dot } alt="dot"></img>
          <h3>
            { categg }
          </h3>
        </div>
      </li>
    )


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
              { category_li }
            </ul>
            <div id="credit">
              <h2>
                credit
              </h2>
              <hr></hr>
              <div id="github">
                <img src={ github } alt="github" height="35" width="35" onClick={ this.to_github }></img>
                <h3>
                  github
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SideBar