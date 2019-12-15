import React from 'react';



//1 - Property  (Normal variable under class)
//2 - Method    (Normal function under the class)

class ImageComponent extends React.Component {

    //property :-
    image_path;
    image_name;

    constructor(props) {
        super(props);
        this.image_path = this.props.path;
        this.image_name = this.props.name;
    }
    //Method :- 
    render () {
        return (
            <div>
                <img src={this.image_path} className="img_class" alt="Image" />
                <p>{this.image_name}</p>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default ImageComponent;