import React from 'react';
import { Redirect } from "react-router-dom";
import "./drop-breadcrumb-item.scss"
import DropIcon from '../drop-icon/drop-icon';
class DropdBreadcrumbItem extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      breadcrumbItem:props.item
    };
  }
  breadcrumbClick(){
    if(this.state.breadcrumbItem.url){
      this.setState({ redirect: this.state.breadcrumbItem.url });
    }
  }
  render(){
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: this.state.redirect,
        state: this.state.breadcrumbItem 
    }} />
    }
    return (<li class="drop-breadcrumb-item">
      <span onClick={this.breadcrumbClick.bind(this)}>{this.state.breadcrumbItem.text}</span>
      <DropIcon icon="icon-angle-right" className="breadcrumb-separator"></DropIcon>
    </li>)
      
  }
}

export default DropdBreadcrumbItem;
