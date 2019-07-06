import React, { Component } from "react";

class About extends Component {
  render(){
    return(
    <div className="row p-0 m-0">
      <div className="about-section">
        <h5 className="section-h5"><strong>HIGH-PERFORMANCE INVESTMENTS FROM UK’S TOP INVESTMENT COMPANY</strong></h5>
        <h1 className="someh1">Enjoy Up To <strong>35%</strong><br/> Yearly Returns</h1>
        <p className="somepara p1"><i class="far fa-check-circle icon1"></i><strong>Custom Portfolios:</strong> Flexible Investment Solutions</p>
        <p className="somepara p2"><i class="far fa-check-circle icon1"></i><strong>Fully Managed:</strong> Personalized Services Available 24x7</p>
        <p className="somepara p3"><i class="far fa-check-circle icon1"></i><strong>Secure Returns:</strong> Safe, Secure & Consistent Interest Returns</p>
        <p className="somepara p4"><i class="far fa-check-circle icon1"></i><strong>Fully Regulated:</strong> FCA Regulated & FSCS Covered Funds</p>
        <img className="img" src="./images/offer-new.png" alt="Not Found"/>
        <img className="arrow" src="./images/top-arrow.png" alt=""/>
        <div className="form form-group">
        <h5 className="form-heading text-center mr-3 ml-3">Achieve Your Financial Goals By Investing With Us Today!</h5>
        <p className="text-center" style={{fontSize:"13px"}}>Fill in the form to reach out to us and we will call you back in 24 hours.</p>
        <div className="d-flex">
        <input type="text" className="form-control ml-3 mr-2" placeholder="Name" id="txt"/>
        <input type="text" className="form-control ml-1" placeholder="Phone" id="txt2"/>
        </div>
        <input type="email" className="form-control mt-3 ml-3" placeholder="Email Address" id="mail"/>
    <select class="form-control mt-3 ml-3" id="option">
        <option>Which investment option are you interested in?</option>
        <option>Deposit & Savings</option>
        <option>Bond Funds</option>
        <option>Equity Funds</option>
        <option>Fixed Rate Bonds</option>
    </select>
    <select class="form-control mt-3 ml-3" id="option2">
        <option>Investment Sum</option>
        <option>$5000 - $25000</option>
        <option>$25000 - #50000</option>
        <option>$50000+</option>
    </select>
    <button className="btn btn-success mt-5 btn1 ml-3">CONTACT US</button>
        
        </div>
        <img src="./images/About-Section.jpg" className="Home" alt="Not Found"/>
    </div>
</div>
 )
  }
}
export default About;