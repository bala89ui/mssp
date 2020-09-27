import React from 'react';
import "./ocean-header.scss"
import DropIcon from '../drop-icon/drop-icon';

function OceanHeader() {
  return (
    <header className="ocean-header">
       <DropIcon icon="icon-cart-arrow-down" color="white" size="large" className="p-r-20"></DropIcon>
       <DropIcon icon="icon-user" color="white" size="large" className="p-r-20"></DropIcon>
    </header>
  );
}

export default OceanHeader;
