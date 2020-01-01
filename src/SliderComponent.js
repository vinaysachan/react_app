import React from 'react';
import ImageComponent from './ImageComponent';

class SliderComponent extends React.Component {

    state = {name : 'Vinay'} ;
    my_name = 'sanjeev';
    constructor(props) {
        super(props);
        console.log('step  - Slider construtor called');
        // this.state = {name : 'Vinay'} ;
    }

    static getDerivedStateFromProps(props,state) {
        console.log('step  - getDrivedStateFromProps called');
        console.log(state);
        return state;
    }

    componentWillReceiveProps() {
        console.log('step - SliderComponent.js componentWillReceiveProps called');
    }

    componentDidMount() {
        console.log('step - SliderComponent.js ComponentDidMount called');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('step - SliderComponent.js shouldComponentUpdate called');
        return true;
    }

    getSnapshotBeforeUpdate(previousProps, previousState) {
        console.log('step - SliderComponent.js getSnapshotBeforeUpdate called');
    }

    componentDidUpdate() {
        console.log('step - SliderComponent.js componentDidUpdate called');
    }


    propStateUpdateHandler = ()  => {
        this.my_name = 'Prasoon';
        this.setState({name : 'Prasoon'});
        console.log(this.state);
    }

    slider  =   ()  =>  {
        return this.props.tinku.map((element, index) => {
            return (
                <ImageComponent myevent={this.propStateUpdateHandler} myname={this.my_name} key={index} path={element.path} name={element.name} />
            );
        });
    }

    // slider() {
    //     return this.props.tinku.map(function(element, index) {
    //         return (
    //             <ImageComponent myevent={this.propStateUpdateHandler} myname={this.my_name} key={index} path={element.path} name={element.name} />
    //         );
    //     });
    // }
    
    render () {
        console.log(this.state);
        console.log('step  - SliderComponent.js Render called');
        return (
            <div>
                <p>This is Image Slider ({this.props.header}) :- </p>
                {this.slider()}
                <button>Update Props & State</button>
            </div>
        );
    }
}

export default SliderComponent;