import React, { Component } from 'react';
import axios from 'axios';
import DropzoneComponent from 'react-dropzone-component';

import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";

export default class PortfolioForm extends Component{
  constructor(props){
    super()

    this.state = {
      name: "",
      description: "",
      category: "None",
      position: "",
      url: "",
      thumb_image: "",
      banner_image: "",
      logo: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentConfig = this.componentConfig.bind(this);
    this.djsConfig = this.djsConfig.bind(this);
    this.handleThumbDrop = this.handleThumbDrop.bind(this);
    this.handleBannerDrop = this.handleBannerDrop.bind(this);
    this.handleLogoDrop = this.handleLogoDrop.bind(this);

    this.thumbRef = React.createRef();
    this.bannerRef = React.createRef();
    this.logoRef = React.createRef();
  }

  handleThumbDrop(){
    return{
      addedFile: file => this.setState({ thumb_image: file })
    };
  }
  handleBannerDrop(){
    return{
      addedFile: file => this.setState({ banner_image: file })
    };
  }
  handleLogoDrop(){
    return{
      addedFile: file => this.setState({ logo: file })
    };
  }

  componentConfig(){
    return{
      iconFiletypes: [".jpg",".png",".ico"],
      showFiletypeIcon: true,
      postUrl: "https://httpbin.org/post"
    }
  }

  djsConfig(){
    return{
      addRemoveLinks: true,
      maxFiles: 1
    }
  }

  buildForm(){
    let formData = new FormData();

    formData.append("portfolio_item[name]",this.state.name);
    formData.append("portfolio_item[description]",this.state.description);
    formData.append("portfolio_item[url]",this.state.url);
    formData.append("portfolio_item[category]",this.state.category);
    formData.append("portfolio_item[position]",this.state.position);

    if(this.state.thumb_image){
      formData.append("portfolio_item[thumb_image]", this.state.thumb_image);
    }
    if(this.state.banner_image){
      formData.append("portfolio_item[banner_image]", this.state.thumb_image);
    }
    if(this.state.logo){
      formData.append("portfolio_item[logo]", this.state.thumb_image);
    }

    return formData;
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event){
    axios.post("https://bark.devcamp.space/portfolio/portfolio_items",this.buildForm(),
    {withCredentials: true}
  ).then(response => {
    this.props.handleSuccessfulFormSubmission(response.data.portfolio_item);
    this.setState = ({
      name: "",
      description: "",
      category: "None",
      position: "",
      url: "",
      thumb_image: "",
      banner_image: "",
      logo: ""
    });
    [this.thumbRef, this.bannerRef, this.logoRef].forEach(ref => {
      ref.current.dropzone.removeAllFiles();
    })
  }).catch(error => {
    console.log("Portfolio-Form handleSubmit", error);
  });

    this.buildForm();
    event.preventDefault();
  }

  render(){
    return(
      <div>
      <h1>portfolioItem</h1>
      <form onSubmit={this.handleSubmit} className="portfolio-form-wrapper">
      <div className="two-column">
      <input type="text" name="name" placeholder="Portfolio Item Name" value={this.state.name} onChange={this.handleChange} />
      <input type="text" name="url" placeholder="URL" value={this.state.url} onChange={this.handleChange} />
      <input type="text" name="position" placeholder="Position" value={this.state.position} onChange={this.handleChange} />
      <select name="category" value={this.state.category} onChange={this.handleChange} className="select-element">
      <option value=""></option>
      <option value="Miscellaneous">Miscellaneous</option>
      <option value="Technology">Technology</option>
      <option value="Social Media">Social Media</option>
      </select>
      <div className="one-column"><textarea className="select-element" type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange} /></div>
      </div>

    <div className="image-uploaders three-column">
    <div>
      <DropzoneComponent
      ref={this.thumbRef}
      config={this.componentConfig()}
      djsConfig={this.djsConfig()}
      eventHandlers={this.handleThumbDrop()}
      ><div className="dz-message">Thumbnail</div></DropzoneComponent></div>

      <DropzoneComponent
      ref={this.bannerRef}
      config={this.componentConfig()}
      djsConfig={this.djsConfig()}
      eventHandlers={this.handleBannerDrop()}
      ><div className="dz-message">Banner</div></DropzoneComponent>

      <DropzoneComponent
      ref={this.logoRef}
      config={this.componentConfig()}
      djsConfig={this.djsConfig()}
      eventHandlers={this.handleLogoDrop()}
      ><div className="dz-message">Logo</div></DropzoneComponent>
      </div>

      <div><button className="btn" type="submit">Save</button></div>
      </form>
      </div>
    )
  }
}
