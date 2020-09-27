import React from 'react';
import ReactDOM from 'react-dom';
import './css/global.css';
import './css/scroll.css';
import './css/icons.css';
import * as serviceWorker from './serviceWorker';
import Routers from './routers/routers';
import OceanFooter from './elements/ocean-footer/ocean-footer';
import OceanHeader from './elements/ocean-header/ocean-header';

ReactDOM.render(
  <React.StrictMode>
    <div className="page-wrapper">
      <OceanHeader></OceanHeader>
        <Routers />
      <OceanFooter></OceanFooter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
