import React from 'react';


class PersonComponent extends React.Component {

    render () {
        return (
            <p>My name is {this.props.name} and my age is  {this.props.age} years</p>
        );
    }
}

export default PersonComponent;