import React, { Component } from 'react';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSignOutAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

import PortfolioContainer from "./portfolio/portfolio-container";
import PortfolioDetail from "./portfolio/portfolio-detail";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Auth from "./pages/auth";
import PortfolioManager from "./pages/portfolio-manager"
import NoMatch from "./pages/no-match";

library.add(faTrash, faSignOutAlt, faEdit);

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleFailedLogin = this.handleFailedLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }

  handleSuccessfulLogin(){
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleFailedLogin(){
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  handleSuccessfulLogout(){
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  checkLoginStatus() {
    return axios
      .get("https://api.devcamp.space/logged_in", {
        withCredentials: true
      })
      .then(response => {
        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;

        if (loggedIn && loggedInStatus === "LOGGED_IN") {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN"
          });
        } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          });
        }
      })
      .catch(error => {
        console.log("Error", error);
      });
  }

  componentDidMount(){
    this.checkLoginStatus();
  }

  authorizedPages() {
    return [<Route key={String(Math.random())} path="/portfolio-manager" component={PortfolioManager} />];
  }

  render() {
    return (
      <div className='container'>

      <Router>
        <div>
          <NavigationContainer
          loggedInStatus={this.state.loggedInStatus}
          handleSuccessfulLogout = {this.handleSuccessfulLogout}
           />
          <Switch>
            <Route exact path="/" component ={Home} />
            <Route path="/auth" render={props => (<Auth {...props}
              handleSuccessfulLogin={this.handleSuccessfulLogin}
              handleFailedLogin={this.handleFailedLogin}
            /> )} />
            <Route path="/about" component ={About} />
            <Route path="/contact" component ={Contact} />
            <Route path="/blog" component ={Blog} />
            {this.state.loggedInStatus === "LOGGED_IN" ? this.authorizedPages() : null}
            <Route exact path="/portfolio/:slug" component ={PortfolioDetail} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}
