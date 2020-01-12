import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'; // ES6
// var PropTypes = require('prop-types'); // ES5 with npm



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
                <p onClick={this.props.clickEvent}>{this.props.text}</p>
                {this.props.children}
            </div>
        );
    }

}

//variable => all props datatypes define :- 
ParaReact.propTypes = {
    clickEvent : PropTypes.func,
    text : PropTypes.string
}

export default ParaReact;