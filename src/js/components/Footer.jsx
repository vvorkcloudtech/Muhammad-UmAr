import React, { Component } from "react";
class Footer extends Component {
  render() {
    
    return (
    <div>
            <div className="container-fluid contact" style={{backgroundColor:"#115098"}}>
        <div className="row">
                <div className="col-md-3">
                    <h5 style={{color:"#fff "}} className="mt-5 ml-5 pt-3">CONTACT US</h5>
                    <p style={{color:"white"}} className="mt-4 ml-5">1 St Giles High St<br/>
London WC2H<br/>
8AG UK</p>
<strong style={{color:"white"}} className="ml-5">Phone: +44 203 695 1157</strong>
                </div>
                <div className="col-md-9">
<h5 style={{color:"white"}} className="mt-5 pt-3 ">ABOUT</h5>
<p style={{color:"white"}} className="pt-3 my-3 mr-5 pr-5">Founded in 2008, Independent Investors is one of the UK’s trusted investment firms. Their financial team consists of 40 trusted associates, with a cumulative 250 years experience trading investments and managing portfolios for their vibrant clientele. Their services include FSCS protected funds and savings options like term savings deposit accounts, fixed-term bonds, global bond index funds, ETFs and index-linked funds.</p>
                </div>
            </div>
        </div>
        <div className="row text-white d-flex justify-content-center align-items-center p-3" style={{backgroundColor:"#022752", width:"101.1%"}}>
            <p> © 2019 Independent Investors. All Rights Reserved.</p>
        </div>
    </div>
    );
  }
}
export default Footer;
