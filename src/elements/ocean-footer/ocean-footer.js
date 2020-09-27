import React from 'react';
import "./ocean-footer.scss"
import logo from '../../images/logo.png';

function OceanFooter() {
  return (
    <footer className="ocean-footer">
      <div className="powered-by" title="Sennovate">Powered-by :: </div>
      <div className="img-wrap"><img title="Sennovate" src={logo} alt="Sennovate"/></div>
     </footer>
  );
}

export default OceanFooter;
