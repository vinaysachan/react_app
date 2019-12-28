import React from 'react';
import Para from './para';



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
        var a = 1+ 99 ;
        return (
            <div>
                <img src={this.image_path} height="100" className="img_class" alt="Image" />
                <Para text={this.image_name} />
                <Para text={this.image_name} >
                    {this.props.children}
                </Para>
                {a}
            </div>
        );
    }
}

export default ImageComponent;