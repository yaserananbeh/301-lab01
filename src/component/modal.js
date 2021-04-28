import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class ModalElement extends React.Component {

  render() {
    return (
      <>
        <Modal show={this.props.display}>
          <Modal.Header>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <div style={{ margin: '0 auto' }}>
            <Card >
              <Card.Img
                variant="top"
                src={this.props.image}
                alt={this.props.description}
                title={this.props.name}
              />
              <Card.Body>
                <Card.Title>{this.props.name}</Card.Title>
                <Card.Text>
                                    Description:{this.props.description}
                </Card.Text>
                <Card.Text>
                                    ❤️ {this.props.numOfClicks}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.show}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default ModalElement;
