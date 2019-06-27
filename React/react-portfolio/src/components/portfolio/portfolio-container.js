import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component{

  constructor(){
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [
        {title: "Google", category: "stuff", slug: "google"},
        {title: "Microsoft", category: "more stuff", slug: "microsoft"},
        {title: "Facebook", category: "also more stuff", slug: "facebook"},
        {title: "AOL", category: "you've got mail", slug: "aol"}
      ]
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
  }

  handleFilter(filter){
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    })
  }

  portfolioItems(){
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} url={"google.com"} slug={item.slug} />;
    })
  }

  handlePageTitleUpdate() {
    this.setState({
      pageTitle: "Something Else"
    })
  }

  render(){
    if(this.state.isLoading){
      return <div>Loading...</div>
    }
    return(
      <div>
        <h2>{this.state.pageTitle}</h2>

        <button onClick={() => this.handleFilter('stuff')}>stuff</button>
        <button onClick={() => this.handleFilter('more stuff')}>more stuff</button>
        <button onClick={() => this.handleFilter('also more stuff')}>also more stuff</button>
        <button onClick={() => this.handleFilter("you've got mail")}>you've got mail</button>

        {this.portfolioItems()}
      </div>
    )
  }
}
