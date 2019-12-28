import React from 'react';
import PersonComponent from './Person/Person';

class App extends React.Component {

    //normal property of person array :-
    // persons =  [{ name: 'Prasoon', age : 30 }, { name: 'Prasoon', age : 30 }, { name: 'Prasoon', age : 30 }]

    state = {
        persons :  [{ name: 'Prasoon', age : 33 }, { name: 'Vinay', age : 32 }, { name: 'Sanchit', age : 23 }],
        not_avaliable : [{ name: 'Anand', age : 33 },{ name: 'Sanjeev', age : 33 }],
     };

    changePersonHandler = () => {
        // alert('change name');
        // console.log(this.state);
        this.setState({
            persons :  [{ name: 'Prasoon', age : 331 }, { name: 'Vinay', age : 321 }, { name: 'Sanchit', age : 231 }]
        });

    }

    render() {
        return (
            <div>
                <button onClick={this.changePersonHandler}>Change Person</button>
                <PersonComponent name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <PersonComponent name={this.state.persons[1].name} age={this.state.persons[1].age} />
                <PersonComponent name={this.state.persons[2].name} age={this.state.persons[2].age} />
                <PersonComponent name={this.state.not_avaliable[0].name} age={this.state.not_avaliable[0].age} />
                <PersonComponent name={this.state.not_avaliable[1].name} age={this.state.not_avaliable[1].age} />
            </div>
        );
    }
}

export default App;