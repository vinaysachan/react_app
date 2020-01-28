import React from 'react';


var data = {
    isAuthenticated : false,
    name : null,
    age : null,
    city : null
} ;

const authContext =  React.createContext(data);

export default authContext;