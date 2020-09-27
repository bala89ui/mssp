import React from 'react';
import "./ocean-dashboard-search-result.scss"
import DropCard from '../drop-card/drop-card';
import DropItemViewer from '../drop-item-viewer/drop-item-viewer';
import data from '../../api/demo.json';
import Utils from '../../utils/utils';
import config from '../../config/ocean-dashboard-search-result_config.json';

class OceanDashboardSearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: {}
    };
  }
  componentDidMount() {
    if (data && config) {
      this.setState({
        isLoaded: true,
        data: data,
        fields:config.grid.fields
      });
    }
  }
  componentWillUpdate(props){
    let searchValue = props.searchValue;
    if(!Utils.isEmpty(searchValue)){
      searchValue = searchValue.toUpperCase();

      this._searchResult(searchValue);
    }
 }
 _searchResult(solutionNames){
   this._searchResultBySolutionName(solutionNames);
 }
 _searchResultBySolutionName(solutionNames){
  const {data } = this.state;
  let solutions=[];
  let solItems={};
  if (data && !Utils.isEmpty(data.categories)) {
    let categories = data.categories;
    let items;
    categories.forEach((categorie) => {
      items = !Utils.isEmpty(categories) && Object.values(categorie)[0];
        (items || []).forEach((item) => {
          if (item && item.solutionName && solutionNames.includes(item.solutionName)) {
            if (item.solutionName) {
              if(!Array.isArray(solItems[item.solutionName])){
                solItems[item.solutionName]=[]
              }
              item["id"] = Utils.getUniqueId();
              solItems[item.solutionName].push(item)
            }
          }
        })
    });
    for (const property in solItems) {
      solutions.push({title:property,value:solItems[property],id:Utils.getUniqueId()})
    }
    this.state.solutions = solutions;
  }
  
 }
  render() {
    const { isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else { 
      if(Utils.isEmpty(this.props.searchValue)){
        let solutionNames = ["SSO","MFA","IAM"]
        this._searchResult(solutionNames);
      }
    }
    return (
      <div className="ocean-dashboard-search-result">
        <div className="widget-panel">
        {Utils.isEmpty(this.state.solutions) ?
          <div class="message"> No results found for the given criteria</div>:
          this.state.solutions.map((item) => {
              return(<div className="widget" key={item.id} >
                <DropCard title={item.title} content={<DropItemViewer data={item.value} fields={this.state.fields}></DropItemViewer>}>
                </DropCard>
            </div> )
          })
        }
        </div>
      </div>
    );
  }
}

export default OceanDashboardSearchResult;
