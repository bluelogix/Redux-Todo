import React, { Component } from "react";
import { connect } from 'react-redux';

import { addTodo, toggleTodo } from '../actions';


class Todo extends Component {
        state = {
            newValue: ''
        }



    handleChanges = e => {
     this.setState({ newValue: e.target.value });
     };
        

    addTodo = e => {
     e.preventDefault();
     this.props.addTodo(this.state.newValue);
    };

    toggleTodo = (e, index) => {
        e.preventDefault();
        this.props.toggleTodo(index);
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
            <button onClick={this.addTodo}>Add Todo</button>
            
            <div>
            {this.props.todo.map(( todoList, index ) => (
                <h2 onClick={e => this.toggleTodo(e, index)} 
                
                key={index}> 
                {todoList.value}
                </h2>
            ))}
            </div>
           

            </> // fragment
        );
    }
}


const mapStateToProps = state => ({
     todo: state.todo
    
});



export default connect(mapStateToProps, { addTodo , toggleTodo }) (Todo);
