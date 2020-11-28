import React from 'react';
import '../../css/navbar.css';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

//import {Nav,NavbarContainer,NavLogo} from './NavbarElements'; (switched to css)

function Navbar() {
    
    return (
       <>
       <nav id='nav' class="navbar navbar-expand-lg  sticky-top">
            <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
  <a class="navbar-brand" href="#">😍😍</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="#" to="about">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" to="discover">Discover</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" to="signup">SignUp</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" to="services">Services</a>
      </li>
    </ul>
    <div className="navBtn">
    <button class="btn btn-sm btn-success" type="button" to="/signin">Sign In</button>
    </div>
  </div>
</nav>
       </>
    )
}

export default Navbar
