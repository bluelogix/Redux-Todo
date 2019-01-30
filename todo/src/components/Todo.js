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
     this.setState({newValue: ''})
    };

    toggleTodo = (e, index) => {
        e.preventDefault();
        this.props.toggleTodo(index);
      };
    

    render() {
        return (
            <>

            <h1>TODO LIST</h1>
            
            <input className="inputList"
                type="text"
                value={this.state.newValue}
                onChange={this.handleChanges}
                placeholder="Add a new task.."
                 />
            <button onClick={this.addTodo}>Add Todo</button>
            
            <div className="todoBorder">
            {this.props.todo.map(( todoList, index  ) => (
                <li onClick={e => this.toggleTodo(e, index)} 
                className={todoList.completed ? 'completedTodo' : ''}
                key={index} > 
                {todoList.value}
                </li>
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
