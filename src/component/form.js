import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Main from './Main';

class filterForm extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      value: 'All',
    };
  }

  submitFilter=(event)=>{
    event.preventDefault();
    this.setState({ value: event.target.value });
    // console.log(this.state.value);
  }



  render(){
    return(

      <>
        <Form>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Custom select</Form.Label>
            <Form.Control as="select" custom onChange={this.submitFilter}>

              <option value="All">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Main value={this.state.value}/>
      </>
    );
  }
}
export default filterForm;
