import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfClicks: 0
        }
    }
    clicksHandler = () => {
        this.setState({
            numOfClicks: this.state.numOfClicks + 1
        })
    }
    render() {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.url}  onClick={this.clicksHandler}/>
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
        )
    }
}
export default HornedBeasts;