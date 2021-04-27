import React from 'react';
import HornedBeasts from './HornedBeasts';
import Data from '../data.json';

class Main extends React.Component{
  render(){
        let dataContent=[];
        Data.forEach(index=>{
            dataContent.push(<HornedBeasts name={index.title} url={index.image_url} description={index.description} />);
        })
      return dataContent;
  }
}
export default Main;