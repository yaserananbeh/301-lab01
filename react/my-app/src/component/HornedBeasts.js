import React from 'react';
// import one from '../images/one.jpg';
// import two from '../images/two.jpg';

class HornedBeasts extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <section class='section'>
                
                <h2 class="title">{this.props.imageTitle}</h2>
                
                <img src={this.props.src} alt='' title='' width='200px'/>
                <p class='discription'>{this.props.imageDescription}</p>
            </section>
            
        )
    };
}

export default HornedBeasts;