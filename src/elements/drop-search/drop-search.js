import React from 'react';
import "./drop-search.scss"
import DropIcon from '../drop-icon/drop-icon';
class DropSearch extends React.Component{
  constructor(props) {
    super(props);
    
  }
  render(){ 
    return (
      <div className="drop-search">
        <input id="searchInput" type="text" value={this.props.value} placeholder={this.props.placeholder} onKeyUp={this.props.onSearch}/>
        <DropIcon icon="icon-search" className="search-icon"></DropIcon>
      </div>

    );
  }
}

export default DropSearch;
