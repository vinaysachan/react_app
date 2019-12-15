import React from 'react';
import ImageComponent from './ImageComponent';


class SliderComponent extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render () {
        var slider = this.props.tinku.map(function(element, index) {
            return (
                <ImageComponent key={index} path={element.path} name={element.name} />
            );
        })

        return (
            <div>
                <p>This is Image Slider :- </p>
                {slider}
            </div>
        );
    }
}

export default SliderComponent;