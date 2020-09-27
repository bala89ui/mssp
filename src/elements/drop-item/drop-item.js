import React from 'react';
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
  render(){
    let item = this.state.item;
    let field = this.state.fields;
    return (
      <div className="drop-item">
      {!Utils.isEmpty(item) && !Utils.isEmpty(field) &&
        <span href="temp/2">{item[field[0]]}</span>
      }
    </div>
    );
  }
}

export default DropItem;
