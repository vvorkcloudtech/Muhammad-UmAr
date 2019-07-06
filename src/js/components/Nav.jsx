import React, { Component } from "react";

class Nav extends Component {
  render() {
      return(
          <div>
            <nav class="navbar navbar-expand-lg navbar-light">
  <a href="#" className="logo mt-3 ml-5"><img src="./images/Logo.png" alt=""/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse offset-md-2" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" href="#">ABOUT US <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">TESTIMONIALS</a>
      <a class="nav-item nav-link" href="#">WHAT WE OFFER
</a>
      <a class="nav-item nav-link" href="#" tabindex="-1" aria-disabled="true">CONTACT US</a>
    </div>
  </div>
  <div className="num">
  <a href=""><i class="fas fa-phone icon mr-2"></i></a>
      +44 203 695 1157</div>
</nav>
          </div>
      )
    
  }
}
export default Nav;
