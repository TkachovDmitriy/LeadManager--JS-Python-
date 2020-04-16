import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
        <a className="nav-link" href="#">Leead Menager</a>
    </ul>
  </div>
</nav>
        )
    }
}

export default Header
