import React, { Component } from 'react';
import './Header.scss'
import { Link } from 'react-router-dom';
import Images from '../../Containers/Images/Images';



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="header-bgd-color">
      <nav class="mb-1 navbar navbar-expand-lg navbar-dark info-color">
  <a class="navbar-brand" href="#"> <img className='eslogo-Img'  src={Images.path.eslogo} /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
    aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
    <ul class="navbar-nav ml-auto">
    <li class="nav-item active">
        <a class="nav-link top-color " href="/">
        HOME
          <span class="sr-only">(current)</span>
        </a>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle top-color" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
         BLOCKCHAIN
         <span class="sr-only">(current)</span></a>
        <div class="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
          <a class="dropdown-item" href="/Myaccount">My account</a>
          <a class="dropdown-item" href="/">Log out</a>
        </div>
      </li>
     
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle top-color" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
         TOKENS
         <span class="sr-only">(current)</span></a>
        <div class="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
          <a class="dropdown-item" href="/Myaccount">My account</a>
          <a class="dropdown-item" href="/">Log out</a>
        </div>
      </li>
       <li class="nav-item active">
        <a class="nav-link top-color" href="/alerts">
         TIMEALLY EXPLORER
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link top-color" href="/BlockPage">
        CONNECT TO WALLET
          <span class="sr-only">(current)</span>
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