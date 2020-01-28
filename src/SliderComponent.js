import React from 'react';
import ImageComponent from './ImageComponent';
import Para from './para';
import ParaReact from './ParaReact' ;
import withWrapFunction from './Hoc/withWrapFunction';
import Aux from './Hoc/Aux';
import PropTypes from 'prop-types'; // ES6
import AuthContext from './Context/authContext';

class SliderComponent extends React.Component {

    state = {name : 'Vinay as a State', btn_clicked : 0} ;
    my_name = 'Sanjeev as a Props';
    ImageComponentObj;
    btnObjRef;
    constructor(props) {
        super(props);
        console.log('step  - Slider construtor called');
        // this.state = {name : 'Vinay'} ;

        this.btnObjRef = React.createRef();

    }

   

    static getDerivedStateFromProps(props,state) {
        console.log('step  - getDrivedStateFromProps called');
        console.log(state);
        return state;
    }

    // componentWillReceiveProps() {
    //     console.log('step - SliderComponent.js componentWillReceiveProps called');
    // }

    componentDidMount() {
        console.log('step - SliderComponent.js ComponentDidMount called');
        console.log(this.ImageComponentObj);
        console.log(this.btnObjRef);
        console.log(this.btnObjRef.current);
        this.btnObjRef.current.setAttribute('nnn','vvvv');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('step - SliderComponent.js shouldComponentUpdate called');
        return true;
    }

    getSnapshotBeforeUpdate(previousProps, previousState) {
        console.log('step - SliderComponent.js getSnapshotBeforeUpdate called');
        return null;
    }

    componentDidUpdate() {
        console.log('step - SliderComponent.js componentDidUpdate called');
    }


    propStateUpdateHandler = ()  => {
        this.my_name = 'Prasoon as a Props';
        this.setState({name : 'Prasoon as State'});
        console.log(this.state);
    }

    slider  =   ()  =>  {
        return this.props.tinku.map((element, index) => {
            return (
                <ImageComponent 
                    key={index} 
                    ref= {(ObjectElement) => {
                        this.ImageComponentObj = ObjectElement ; 
                    }}
                    myevent={this.propStateUpdateHandler} 
                    myname={this.my_name}  
                    path={element.path} 
                    name={element.name} 
                />
            );
        });
    }

    // slider() {
        // var thClass = this ;
    //     return this.props.tinku.map(function(element, index) {
    //         return (
    //             <ImageComponent myevent={thClass.propStateUpdateHandler} myname={thClass.my_name} key={index} path={element.path} name={element.name} />
    //         );
    //     });
    // }
    
    btnClickHandler =   ()  =>  {
        //We must avoid this.state insidew setState :-
        // this.setState({
        //     btn_clicked : this.state.btn_clicked + 1
        // });
        this.setState((previousState, previousProps) => {
            return {
                btn_clicked : previousState.btn_clicked + 1
            }
        });
    }

    render () {
        console.log(this.state);
        console.log('step  - SliderComponent.js Render called');
        return (
            <div>
                <AuthContext.Consumer>
                {
                    (context) => context.isAuthenticated ? (<p>Welecome back {context.name}</p>) : 'Not Login'
                }
                </AuthContext.Consumer>
                <Para isAuth={this.props.isAuth} text="Here we used Para Component as functional component">({this.props.header}) :-</Para>
                {this.slider()}
                <button  
                    onClick={this.btnClickHandler}
                    ref={this.btnObjRef}
                >Update Props & State ({this.state.btn_clicked} times Button Clicked) </button>
                <ParaReact clickEvent={this.propStateUpdateHandler} text={this.state.name} />
            </div>
        );
    }
}

SliderComponent.propTypes = {
    tinku : PropTypes.array,
    header : PropTypes.string
}

export default withWrapFunction(SliderComponent, 'bbbbbb') ;