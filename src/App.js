import React from 'react';
import Blog from './Blog/Blog';
import {BrowserRouter} from 'react-router-dom';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render = () => {
        var a = ' Vinay' ;
        return  (
            <BrowserRouter>
                <div className="App">
                    <Blog />
                </div>
            </BrowserRouter>
        )
    } 
}

export default App;