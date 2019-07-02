import React from 'react';

const PortfolioSidebarList = props => {
  const portfolioList = props.data.map(portfolioItem => {
    return(
      <div key={String(Math.random())} className="portfolio-item-thumb">
      <div className="portfolio-thumb-img">
        <img src={portfolioItem.thumb_image_url} />
      </div>
        <h1>{portfolioItem.name}</h1>
        <h2>{portfolioItem.id}</h2>
      </div>
    )
  });
  return <div className="portfolio-sidebar-list-wrapper">{portfolioList}</div>
};

export default PortfolioSidebarList;