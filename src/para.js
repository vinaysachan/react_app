import React, {useState} from 'react';
 

const Para  = (props) => {
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
            <p>{props.text}</p>
            {props.children}
        </div>
    );
};

export default Para;