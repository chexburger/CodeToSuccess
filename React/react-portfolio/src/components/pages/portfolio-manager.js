import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list"
import PortfolioForm from "../portfolio/portfolio-form";

export default class PortfolioManager extends Component{
  constructor(){
    super();

    this.state = {
      portfolioItems: []
    };

    this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
    this.handleFormSubmissionFailure = this.handleFormSubmissionFailure.bind(this);
  }

  handleSuccessfulFormSubmission(portfolioItem){
    // update portfolioItems state
    // add item to list
  }

  handleFormSubmissionFailure(error){
    console.log("handleFormSubmissionFailure",error)
  }

  getPortfolioItems(){
    axios.get("https://jordan.devcamp.space/portfolio/portfolio_items",{
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
      <PortfolioForm
          handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
          handleFormSubmissionError={this.handleFormSubmissionError}
        />
      </div>
      <div className="right-column">
        <PortfolioSidebarList data={this.state.portfolioItems} />
      </div>
      </div>
    )
  }
}
