import React from 'react';
import SliderComponent from './SliderComponent';
import ImageComponent from './ImageComponent';

class App extends React.Component {

    sliderImages = [
            {
                path    :   'https://images.mapsofindia.com/my-india/2019/12/map-showing-internet-shutdown-in-india.jpg',
                name    :   'Image 1'
            },{
                path    :   'https://images-na.ssl-images-amazon.com/images/I/71RgfIeTq6L._SY450_.jpg',
                name    :   'Image 2'
            },{
                path    :   'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Language_region_maps_of_India.svg/400px-Language_region_maps_of_India.svg.png',
                name    :   'Image 3'
            },
        ];
    
    // constructor(props) {
    //     super(props);
    // }

    render () {
        return (
            <div>
                <h1>Welcome to India</h1>
                <SliderComponent header="My Front Slider" tinku={this.sliderImages} />
                <p>This is special Image</p>
                <ImageComponent path="./images/logo.png"name="this is react LOgo">
                    My name is vinay sachan
                </ImageComponent>
                <hr />
                <ImageComponent path="./images/logo.png"name="this is react LOgo">
                    <ImageComponent path="./images/logo.png"name="this is react LOgo"></ImageComponent>
                </ImageComponent>
            </div>
        );
    }
}

export default App;