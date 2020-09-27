import React from 'react';
import './drop-icon.scss'

const DropIcon = (props) => {
  return (<i className={`${props.icon} default drop-icon ${props.color} ${props.size} ${props.className}`}></i>);
}

export default DropIcon;
