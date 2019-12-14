import React from 'react';
import ImageComponent from './ImageComponent';


class SliderComponent extends React.Component {
    render () {
        return (
            <div>
                <p>This is Image Slider :- </p>
                <ImageComponent path="https://images.mapsofindia.com/my-india/2019/12/map-showing-internet-shutdown-in-india.jpg" name="Image 1"/>
                <ImageComponent path="https://images-na.ssl-images-amazon.com/images/I/71RgfIeTq6L._SY450_.jpg" name="Image 2"/>
                <ImageComponent path="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Language_region_maps_of_India.svg/400px-Language_region_maps_of_India.svg.png" name="Image 3"/>
            </div>
        );
    }
}

export default SliderComponent;