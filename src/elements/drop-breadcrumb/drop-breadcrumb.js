import React from 'react';
import DropdBreadcrumbItem from "../drop-breadcrumb-item/drop-breadcrumb-item";
import Utils from '../../utils/utils';
import "./drop-breadcrumb.scss"
class DropdBreadcrumb extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      breadcrumb:props.breadcrumb
    };
    
  }
  render(){
    return(<ul class="drop-breadcrumb breadcrumb">
      {!Utils.isEmpty(this.state.breadcrumb) ?
           this.state.breadcrumb.map((item,index) => {
            return(<DropdBreadcrumbItem item={item} key={index}></DropdBreadcrumbItem>)
           })
        :""}
      </ul>
    )
  }
}

export default DropdBreadcrumb;
