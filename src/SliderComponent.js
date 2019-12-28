import React from 'react';
import ImageComponent from './ImageComponent';



class SliderComponent extends React.Component {

    slider () {
        return this.props.tinku.map(function(element, index) {
            return (
                <ImageComponent key={index} path={element.path} name={element.name} />
            );
        })
    }

    render () {
        return (
            <div>
                <p>This is Image Slider :- </p>
                {this.slider()}
            </div>
        );
    }
}

export default SliderComponent;