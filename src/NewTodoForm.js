import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css';

export default class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: " ",
        }
    }

    onHandleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onHandleSubmit = (e) => {
        e.preventDefault();
        this.props.createTodo({ ...this.state, id: uuidv4(), completed: false });
        this.setState({ task: '' })
    }

    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.onHandleSubmit}>
                <label htmlFor='task'>Enter todo</label>
                <input type="text" id="task" name="task" value={this.state.task} onChange={this.onHandleChange} />
                <button>Add Todo</button>
            </form>
        )
    }
}
