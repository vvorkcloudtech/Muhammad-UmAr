import React, { Component } from "react";
class Offer extends Component {
  render() {
    
    return(
    <div className="services">
      
        <div className="container-fluid" style={{backgroundColor:"#f7f7f7"}}>
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center py-5" style={{color:"#022752"}}>What We Offer</h1>
              <div className="row">
              <div className="col-md-4">
              <div className="card bg-transparent border-0">
                <div className="card-body row">
                  <div className="col text-right">
                  <h5 style={{color:"#022752"}}>CONSISTENT RETURNS</h5>
                  <p>We assure you that for all your investments with us, you get your returns on time, paid annually or termwise throughout the investment period.</p>
                  </div>
                  <div className="col-2"><img className="w-100" src="./images/logo-sm.png" alt=""/></div>
                </div>
              </div>
              <div className="card bg-transparent border-0">
                <div className="card-body row">
                  <div className="col text-right">
                  <h5 style={{color:"#022752"}}>FSCS COVERED FUNDS</h5>
                  <p>We have investment funds that are covered by the Financial Services Compensation Scheme (FSCS), which provides an additional shield of protection to all investments up to £80,000.</p>
                  </div>
                  <div className="col-2"><img className="w-100" src="./images/logo-sm.png" alt=""/></div>
                </div>
              </div>
              <div className="card bg-transparent border-0">
                <div className="card-body row">
                  <div className="col text-right">
                  <h5 style={{color:"#022752"}}>FLEXIBILITY & PERSONALISATION</h5>
                  <p>With us, you can personalise your portfolios with investments that are risk-free, ensure consistent returns and meet all your financial goals with the principal investment as low as £5,000.</p>
                  </div>
                  <div className="col-2"><img className="w-100" src="./images/logo-sm.png" alt=""/></div>
                </div>
              </div>
              </div>
              <div className="col-md-4 d-flex align-items-center justify-content-center">
                <img className="w-100" src="./images/independent-investors.png" alt=""/>
              </div>
              <div className="col-md-4">
              <div className="card bg-transparent border-0">
                <div className="card-body row">
                  <div className="col-2"><img className="w-100" src="./images/logo-sm.png" alt=""/></div>
                  <div className="col text-left">
                  <h5 style={{color:"#022752"}}>ACCESSIBLE CUSTOMER SERVICE</h5>
                  <p>Throughout your investment period, we provide you with 24×7 customer service, ensuring a continuous conversation with our team as and when needed.</p>
                  </div>
                </div>
              </div>
              <div className="card bg-transparent border-0">
                <div className="card-body row">
                  <div className="col-2"><img className="w-100" src="./images/logo-sm.png" alt=""/></div>
                  <div className="col text-left">
                  <h5 style={{color:"#022752"}}>CAPITAL PROTECTION</h5>
                  <p>We ensure 100% capital protection at the end of the term with zero hidden charges applied. After a brief investment period, you can tune or withdraw your investment as necessary.</p>
                  </div>
                </div>
              </div>
              <div className="card bg-transparent border-0">
                <div className="card-body row">
                  <div className="col-2"><img className="w-100" src="./images/logo-sm.png" alt=""/></div>
                  <div className="col text-left">
                  <h5 style={{color:"#022752"}}>INVESTMENT GUIDANCE</h5>
                  <p>We provide comprehensive guidance and advisory services for our clients on their investments for better returns on investments and portfolio management.</p>
                  </div>
                </div>
              </div>

              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
  }
}
export default Offer;