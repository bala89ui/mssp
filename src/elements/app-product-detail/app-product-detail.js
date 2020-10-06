import React from 'react';
import './app-product-detail.scss';
import DropBreadcrumb from '../drop-breadcrumb/drop-breadcrumb';
import Utils from '../../utils/utils';

class AppProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      item:Utils.isValidPath(props,"location.state.item")?props.location.state.item:{}
    }
  }
  componentDidMount(){
    if(!Utils.isEmpty(this.state.item)){
      let item = this.state.item;
      /* needs to read from config*/
      let breadcrumb = [{text:"Home",url:"/"},
        {text:"Product",url:"/"},
        {text:item.solutionName,url:"/"},
        {text:item.vendorName,url:"/"},
        {text:"Features"},]
        this.setState({
          breadcrumb
        });
    }
  }
  render() {
    if(Utils.isEmpty(this.state.breadcrumb)){
      return("");
    }
    return ( 
      <div className="app-container app-product-detail">
        <DropBreadcrumb breadcrumb={this.state.breadcrumb}></DropBreadcrumb>
        <h2 className="title">Products Details</h2>
    </div>
    );
  }
  
}

export default AppProductDetail;
