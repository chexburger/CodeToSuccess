import React, { Component } from 'react';
import axios from 'axios';

export default class PortfolioManager extends Component{
  constructor(){
    super();

    this.state = {
      portfolioItems: []
    }
  }

  getPortfolioItems(){
    axios.get("https://bark.devcamp.space/portfolio/portfolio_items",{
      withCredentials: true
    }).then(response =>{
      this.setState({
        portfolioItems: [...response.data.portfolio_items]
      })
    }).catch(error =>{
      console.log("getPortfolioItems",error)
    });
  }

  componentDidMount(){
    this.getPortfolioItems();
  }

  render(){
    return(
      <div className="portfolio-manager-wrapper">
      <div className="left-column">
        <div>Portfolio Form</div>
      </div>
      <div className="right-column">
        <div>Portfolio Form</div>
      </div>
      </div>
    )
  }
}
