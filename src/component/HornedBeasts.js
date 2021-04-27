import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Modal from './modal';
class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfClicks: 0,
      show: false,
    };
  }
  clicksHandler = () => {
    this.setState({
      numOfClicks: this.state.numOfClicks + 1,
      show: this.state.show === false ? true : false
    });
  }
  showModal = () => {
    this.setState({
      show: this.state.show === false ? true : false
    });
  }
  render() {
    return (
      <>
        <Modal
          show={this.showModal}
          display={this.state.show}
          title={this.props.name}
          image={this.props.url}
          description={this.props.description}
          numOfClicks={this.state.numOfClicks}
        />
        <Card style={{ width: '18rem', display: 'inline-block' }}>
          <Card.Img variant="top" src={this.props.url} onClick={this.clicksHandler} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
              <p>

                ❤️ {this.state.numOfClicks}
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default HornedBeasts;
