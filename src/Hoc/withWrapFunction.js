import React from 'react';

const withWrapFunction = (Component, ClassNames) =>  {
    return  props  => (
        <div className={ClassNames}>
            <Component {...props} />
        </div>
    );
}
export default withWrapFunction;