import React, { Component } from "react";
import { connect } from 'react-redux';

import { addTodo,  } from '../actions';


class Todo extends Component {
        state = {
            newValue: ''
        }



    handleChanges = e => {
     this.setState({ newValue: e.target.value });
     };
        

    addFriend = e => {
     e.preventDefault();
     this.props.addTodo(this.state.newValue);
    };



    render() {
        return (
            <>
            <h1>TODO LIST</h1>
            <input
                type="text"
                value={this.state.newValue}
                onChange={this.handleChanges}
                 />
            <button onClick={this.addFriend}>Add Todo</button>
            
            <div>
            {this.props.todo.map(( todoList, index ) => (
                <h2 key={index}>{todoList.value}</h2>
            ))}
            </div>
           

            </> // fragment
        );
    }
}


const mapStateToProps = state => ({
     todo: state.todo
    
});



export default connect(mapStateToProps, { addTodo }) (Todo);
