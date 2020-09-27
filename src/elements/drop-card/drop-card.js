import React from 'react';
import './drop-card.scss'

const DropIcon = (props) => {

  return (<div className="drop-card">
            <span className="card-title">{props.title}</span>
            <div className="card-content">{props.content}</div>
  </div>);
}

export default DropIcon;
