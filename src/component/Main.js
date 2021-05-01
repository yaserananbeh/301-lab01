import React from 'react';
import HornedBeasts from './HornedBeasts';
import Data from '../data.json';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
    };
  }
  theFilterValue=(filterValueT)=>{
    this.setState.filter= filterValueT;
  }
  render() {
    <form sendFunc={this.theFilterValue}/>;
    /********************************************* */
    let dataContent = [];
    /******************************************** */
    if (this.props.value !== undefined) {
      let filterValue = this.props.value;
      // console.log(filterValue);

      this.state.data.forEach(filteredData => {
        if (filteredData.horns ===Number(filterValue) ) {
          // console.log(filteredData.title);
          dataContent.push(<HornedBeasts name={filteredData.title} url={filteredData.image_url} description={filteredData.description} />);
        }
        else{
          // console.log(filterValue,filteredData.horns);
        }

      });
    }

    /******************************************* */
    // this.state.data.forEach(index=>{
    //   dataContent.push(<HornedBeasts name={index.title} url={index.image_url} description={index.description} />);
    // });
    return dataContent;
    /***************************************** */
  }
}
export default Main;
