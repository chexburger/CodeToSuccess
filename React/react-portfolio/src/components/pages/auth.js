import React, { Component } from 'react';
import Login from "../auth/login";
import loginImage from "../../../static/assets/images/auth/login.jpg";

export default class Auth extends Component{
  constructor(props){
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleFailedAuth = this.handleFailedAuth.bind(this);
  }

  handleSuccessfulAuth(){
    this.props.handleSuccessfulLogin();
    this.props.history.push("/")
  }

  handleFailedAuth(){
    this.props.handleFailedLogin();
  }

  render(){
    return(
      <div className="auth-page-wrapper">
      <div className="left-column" style={{
        backgroundImage: `url(${loginImage})`
      }} />
      <div className="right-column">
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth}
        handleFailedAuth={this.handleFailedAuth} />
      </div>
      </div>
    );
  }
}
