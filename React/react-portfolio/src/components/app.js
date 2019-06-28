import React, { Component } from 'react';

import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import PortfolioContainer from "./portfolio/portfolio-container";
import PortfolioDetail from "./portfolio/portfolio-detail";
import NavigationContainer from "./navigation/navigation-container";
import NoMatch from "./pages/no-match";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";


export default class App extends Component {
  render() {
    return (
      <div className='container'>

      <Router>
        <div>
        <h1>DevCamp React Starter</h1>
          <NavigationContainer />
          <Switch>
            <Route exact path="/" component ={Home} />
            <Route path="/about" component ={About} />
            <Route path="/contact" component ={Contact} />
            <Route path="/blog" component ={Blog} />
            <Route exact path="/portfolio/:slug" component ={PortfolioDetail} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}
