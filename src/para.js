import React, {useState, useEffect, useRef} from 'react';
import AuthContext from './Context/authContext';

//useEffect :- 

const Para  = (props) => {

    const pRef  =   React.useRef(null);

    console.log('Para.js called.');

    useEffect(() => {
        console.log('Para.js called useeffect.');
        console.log(pRef);
        console.log(pRef.current);
    });


    const [key1State, key1StateUpdate] = useState({
        key1 : 'val1'
    }); //==> array (2 keys => 1st key set , 2nd key update) 

    const [key2State, key2StateUpdate] = useState({
        key2 : 'val2'
    });

    //state data ==> 1 - set, 2 -update(setState) 
    const changeVal = () => {
        key1StateUpdate({
            key1 : 'val111'
        });
    };
    return (
        <div>
            <AuthContext.Consumer>
                {
                    (context) => context.isAuthenticated ? (<p>You are loggedIn</p> ) : (<p>You are Not loggedIn</p>)
                }
            </AuthContext.Consumer>
            {/* { props.isAuth ? (<p>You are loggedIn</p> ) : <p>You are Not loggedIn</p> } */}
            <p ref={pRef}>{props.text}</p>
            {props.children}
        </div>
    );
};
//AuthContext.Consumer
export default Para;