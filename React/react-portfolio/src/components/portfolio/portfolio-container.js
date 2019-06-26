import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component{

  constructor(){
    super();

    console.log("Portfolio Container has rendered.")
  }

  portfolioItems(){
    const data = ["Google","Microsoft","Facebook","AOL"];

    return data.map(item => {
      return <PortfolioItem title={item} url={"google.com"} />;
    })
  }

  render(){
    return(
      <div>
        <h2>Portfolio Items Here</h2>

        {this.portfolioItems()}
      </div>
    )
  }
}
