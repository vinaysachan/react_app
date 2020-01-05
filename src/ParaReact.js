import React, {useState, useEffect} from 'react';


class ParaReact extends React.Component {
    
    constructor(props) {
        console.log('ParaReact.js constructor called');
        super(props);
        this.state = {key1 : 'val1'} ;
    }

    changeVal = () => {
        this.setState({
            key1 : 'val11111111'
        });
    };

    componentDidMount = () => {
        console.log('ParaReact.js componentDidMount called');
    } 

    render() {
        return (
            <div>
                <p>{this.props.text}</p>
                {this.props.children}
            </div>
        );
    }

}
export default ParaReact;