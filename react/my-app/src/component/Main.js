import React from 'react';
import HornedBeasts from './HornedBeasts';
import one from '../images/one.jpg';
import two from '../images/two.jpg';
class Main extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <div>
                <HornedBeasts imageTitle={'Unicorn Head'} imageDescription={'Someone wearing a creepy unicorn head mask'} src={one} />
                <HornedBeasts imageTitle={'Believe'} imageDescription={'I believe in unicorns, do you?' }src={two}/>
            </div>
        )
    };
}

export default Main;