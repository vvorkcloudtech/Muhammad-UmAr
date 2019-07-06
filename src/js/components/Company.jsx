import React, { Component } from "react";

class Company extends Component {
  render(){
    return(
        <div>
            <div className="container-fluid section2 bg-light">
                <div className="row d-flex justify-content-around">
                    <h1 className="text-center mt-5" style={{fontSize:"60px",color:"#115098",fontWeight:"700"}}>35%
                    <h4 className="text-center mt-3" style={{color:"grey",fontWeight:"200"}}>Maximum Yearly <br/> Returns</h4></h1>
                    <h1 className="text-center mt-5" style={{fontSize:"60px",color:"#115098",fontWeight:"700"}}>100%
                    <h4 className="text-center mt-3" style={{color:"grey",fontWeight:"200"}}>Capital Protection</h4></h1>
                    <h1 className="text-center mt-5" style={{fontSize:"60px",color:"#115098",fontWeight:"700"}}>5k
                    <h4 className="text-center mt-3" style={{color:"grey",fontWeight:"200"}}>Minimum <br/> Investment Capital</h4></h1>
                    <h1 className="text-center mt-5" style={{fontSize:"60px",color:"#115098",fontWeight:"700"}}>80k
                    <h4 className="text-center mt-3" style={{color:"grey",fontWeight:"200"}}>Maximum <br/>Coverage By FSCS</h4></h1>
                </div>

                <div className="row">
                    <div className="col-md-6">
                    <h1 className="heading">About Our Company</h1>
                <p style={{fontSize:"18px",marginRight:"70px",marginLeft:"70px",marginTop:"20px"}}>Independent Investors is a leading investment company based in the United Kingdom. Founded in the year 2008, we have been in the investment industry for more than a decade, serving our clients through the years. Our team of 40 trusted associates boasts of a cumulative 250 years of experience in investment trading, investment sales and portfolio management for clients from diverse backgrounds.</p>

                <p  style={{fontSize:"18px",marginRight:"70px",marginLeft:"70px",marginTop:"20px"}}>As a finance team, we tend to our client’s financial goals, guiding them to make the best investments. We further help them align these investments according to changing market values and adjust their portfolios from time to time. Our services include FSCS protected funds and savings options like term savings deposit accounts, fixed-term bonds, global bond index funds, ETFs and index-linked funds.</p>
                    </div>
                    <div className="col-md-6 pt-5 mt-5">
                        <img style={{height:"420px",width:"530px"}} src="./images/independent-investements.jpg" alt=""/>
                    </div>
                </div>
        

            </div>
        </div>
    )
    }
}
export default Company;