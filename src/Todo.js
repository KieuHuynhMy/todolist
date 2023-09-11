import React, { Component } from 'react'
import './Todo.css';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.todo
        }
    }

    handleRemove = () => {
        this.props.removeTodo(this.props.id)
    }

    toggleForm = () => {
        this.setState({ isEditing: !this.state.isEditing })
    }

    onHandleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    updateTodo = (e) => {
        e.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({ isEditing: false })
    }

    handleToggle = () => {
        this.props.toggleTodo(this.props.id);
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div className='Todo'>
                    <form className="Todo-edit-form" onSubmit={this.updateTodo}>
                        <input type="text" name="task" value={this.state.task} onChange={this.onHandleChange} />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div className='Todo'>
                    <li className={this.props.completed ? 'Todo-task completed' : 'Todo-task'} onClick={this.handleToggle}>
                        {this.props.todo}
                    </li>
                    <div className='Todo-buttons'>
                        <button onClick={this.toggleForm}><i class="fa-solid fa-pen"></i></button>
                        <button onClick={this.handleRemove}><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            )
        }
        return result;
    }
}
