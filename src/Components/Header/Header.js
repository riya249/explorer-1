import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import Images from '../../Containers/Images/Images';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white',
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }
  listenScrollEvent = (e) => {
    if (window.scrollY > 40) {
      this.setState({ color: 'black' });
    } else {
      this.setState({ color: 'white' });
    }
  };
  render() {
    return (
      <div className="header-bgd-color">
        <nav
          className="mb-1 navbar navbar-expand-lg navbar-dark info-color"
          style={{ color: this.state.color }}
        >
          <a className="navbar-brand" href="/">
            {' '}
            <img className="eslogo-Img" src={Images.path.eslogo} />
          </a>
          <a className="nav-head-color" href="/">
            ES Explorer
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent-4"
            aria-controls="navbarSupportedContent-4"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent-4"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link top-color " href="/">
                  HOME
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link top-color" href="/dashboard">
                  DASHBOARD
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle top-color"
                  id="navbarDropdownMenuLink-4"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  TOKENS
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link top-color" href="/Explore">
                  TIMEALLY EXPLORER
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link top-color" href="/BlockPage">
                  CONNECT TO WALLETxxxxxx
                  <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
