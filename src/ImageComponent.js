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
        this.myevent    = this.props.myevent ;  
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('step - ImageComponent.js shouldComponentUpdate called');
        return true;
    }

    getSnapshotBeforeUpdate(previousProps, previousState) {
        console.log('step - ImageComponent.js getSnapshotBeforeUpdate called');
    }
    
    componentDidUpdate() {
        console.log('step - ImageComponent.js componentDidUpdate called');
    }

    //Method :- 
    render () {
        console.log('step - ImageComponent.js Render called'); 
        return (
            <div>
                <img onClick={this.myevent} src={this.image_path} height="100" className="img_class" alt="Image" />
                <Para text={this.image_name} />
                <Para text={this.image_name} >
                    {this.props.children}
                </Para>
                {this.props.myname}
            </div>
        );
    }
}

export default ImageComponent;