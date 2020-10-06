import React from 'react';
import { Redirect } from "react-router-dom";
import Utils from '../../utils/utils';
import "./drop-item.scss"
class DropItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      item:props.item,
      fields:props.fields
    }
  }
  itemClick(){
  this.setState({ redirect: `/ocean-product-detail` });
    
  }
  render(){
    let item = this.state.item;
    let field = this.state.fields;
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: this.state.redirect,
        state: { item }
    }} />
    }
    
    return (
      <div className="drop-item" onClick={this.itemClick.bind(this)}>
      {!Utils.isEmpty(item) && !Utils.isEmpty(field) &&
        <span >{item[field[0]]}</span>
      }
    </div>
    );
  }
}

export default DropItem;
