import React, { Component } from "react";
class Clients extends Component {
  render() {
    return (
    <div>
      <div className="container-fluid clients">
        <h1 className="text-center pt-4" style={{color:"#022752"}}>Happy Clients</h1>
        <p className="text-center pt-2">See what our happy clients got to say about us</p>
      <div className="row mt-5">
<div className="col-md-4">
        <div className=" card border-0">
  <img src="./images/testi-1.jpg" className="card-img-center mt-4 cardimg" alt="..."/>
  <div className="card-body">
    <p className="card-text ml-5 mr-5 text-center">" Independent investors have been managing my portfolios for more than 5 years now. Apart from helping me make sound financial decisions, the further ensure that every penny you invest is accounted for. I am truly happy with their work. “</p>
    <strong><p className="text-center">TERRY PARKER</p></strong>
  </div>
</div>

</div>
<div className="col-md-4">
<div className=" card border-0">
  <img src="./images/testi-2.jpg" className="card-img-center mt-4 cardimg" alt="..."/>
  <div className="card-body">
    <p className="card-text text-center ml-5 mr-5">" I have invested with various other investment firms in the UK, but none has exceeded my expectations like Independent Investors. Their personalized services ensured stable and consistent returns. The team is professional yet very approachable and has helped me gain the best returns from the investments. I would definitely recommend them to my acquaintances. “</p>
    <strong><p className="text-center">MATHEW JENSON</p></strong>
  </div>
</div>
</div>
<div className="col-md-4">
<div className=" card border-0">
  <img src="./images/testi-3.jpg" className="card-img-center mt-4 cardimg" alt="..."/>
  <div className="card-body">
    <p className="card-text text-center ml-5 mr-5">“The personalized services from Independent investors has always helped me with my financial goals. The team is highly proactive and available to answer queries at all times. I would highly recommend their services."</p>
    <strong><p className="text-center">MARIAM SALAM</p></strong>
  </div>
</div>
</div>
  </div>


        
      </div>
    </div>
    )
  }
}
  
export default Clients;
