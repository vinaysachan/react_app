import React from 'react';



class ImageComponent extends React.Component {

    // image_path;
    // image_name;

    constructor(props) {
        super(props);
        this.image_path = this.props.path;
        this.image_name = this.props.name;
    }

    render () {
        return (
            <div>
                <img src={this.image_path} alt="Image" className="" />
                <p>{this.image_name}</p>
            </div>
        );
    }
}

export default ImageComponent;