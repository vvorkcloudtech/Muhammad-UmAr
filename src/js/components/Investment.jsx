import React, { Component } from "react";
class Projects extends Component {
  render() {
    
    return(
   
      <div className="investments">
          <div className="container-fluid" style={{borderBottom:"1px solid darkgray"}}>
            <h5 className=" text-center my-5" style={{color:"#443986"}}>We help our clients achieve their financial goals with<strong> 100% capital protection.</strong></h5>
        <div className="row">
            <div className="col-md-6">
              <p className="ml-5 mr-3">As a leading investment firm with access to some of the high performing investment funds in the UK, we handle investments from as low £5,000 to £1,000,000+ and deliver consistent returns to all our clients.
<br/><br/>
We bring the best possible financial gains to each and every one of our client and ensure 100% capital protection all the while. Our ongoing conversations with them help in maintaining better client relationships and understand their financial goals better. With this information, we further help perfect the portfolios through continuous assessments. We also provide a clear stress-free exit strategy to our clients, making business with us completely hassle-free.
<br/><br/>
For more information, feel free to contact us by email or phone. We are happy to help always.</p>
            </div>
            <div className="col-md-6" style={{marginBottom:"50px"}}>
              <img className="h-55 w-100" src="./images/happy-family.jpg" alt=""/>
            </div>
            
          </div>
        </div>
          <div className="container-fluid" style={{marginTop:"60px"}}>
        <div className="row">
            <div className="col-md-7">
            <strong><h2 className="ml-5" style={{color:"#443986"}}>Compound Interest Calculator</h2></strong>
            <p className="ml-5 mr-5 mt-3">To effectively grow your wealth, you must systematically fund your investments over a period of time. This can be added as smaller deposits to a savings account, from where you can divert to other plans at a later time.
<br/><br/>
TOur compound interest calculator will help you understand how this strategy could work in your favour.</p>

            </div>

            <div className="col-md-4 py-5" style={{backgroundColor:"lightgrey",marginBottom:"100px"}}>
            <div className="d-flex">
            <div className="form-group col-md-6">
              <label htmlFor="">Principal Amount:</label>
              <input type="number" className="form-control"/>
              </div>
              <div className="form-group col-md-6">
              <label htmlFor="">Interest Rate:</label>
              <input type="number" className="form-control"/>
              </div>
              </div>
              <div className="d-flex">
              <div className="form-group col-md-6">
              <label htmlFor="">Compounded:</label>
              <select class="form-control" style={{ height:"40px"}}>
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Half-Yearly</option>
                <option>Yearly</option>

                </select>
              </div>
              <div className="form-group col-md-6">
              <label htmlFor="">Period (months):</label>
              <input type="number" className="form-control"/>
              </div>
              </div>
              <button className="btn btn-outline-dark ml-3">Submit</button>
            <div className="amount" style={{backgroundColor:"#022752"}}>
              <strong><p>Interest Amount:</p></strong>
              <h5 className="amt">£ 0.0</h5>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
