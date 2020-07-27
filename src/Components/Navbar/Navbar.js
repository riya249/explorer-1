import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Images from '../../Containers/Images/Images';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'transparent',
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }
  listenScrollEvent = (e) => {
    if (window.scrollY > 40) {
      this.setState({ color: '#747FEB' });
    } else {
      this.setState({ color: 'transparent' });
    }
  };
  render() {
    return (
      <div className="header-bgd-color">
        <nav
          className="mb-1 navbar navbar-expand-lg text-white fixed-top"
          style={{ backgroundColor: this.state.color }}
        >
          <Link className="navbar-brand" to="/">
            {' '}
            <img
              className="eslogo-Img"
              alt="Logo"
              src={Images.path.esgreylogo}
            />
          </Link>
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
              <i className="fa fa-bars" aria-hidden="true"></i>
            </span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent-4"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  HOME
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/dashboard">
                  DASHBOARD
                  <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item ">
                <Link className="nav-link" to="/explore">
                  TIMEALLY EXPLORER
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink-4"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  MORE
                  <span className="sr-only">(current)</span>
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/calculator">
                    ES Calculator
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
