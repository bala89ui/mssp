import React from 'react';
import './drop-item-viewer.scss';
import DropItem from '../drop-item/drop-item';


class DropItemViewer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items:props.data,
      fields:props.fields
    }
  }
  render(){
    
    let items = this.state.items;
    let fields = this.state.fields;
   
    return (
      <div className="drop-item-viewer">
        {items.map((item,index) => (
              <DropItem key={index} item={item} fields={fields}></DropItem>
        ))}
      </div>
    );
  }
}

export default DropItemViewer;
