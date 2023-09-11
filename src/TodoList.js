import React, { Component } from 'react'
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 1, task: 'Meeting with client' },
                { id: 2, task: 'Merge code' },
                { id: 3, task: 'Learn...' }
            ]
        }
    }

    create = (newTodo) => {
        this.setState({ todos: [...this.state.todos, newTodo] })
    }

    remove = (id) => {
        this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) })
    }

    update = (id, updatedTask) => {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask }
            }
            return todo;
        })
        this.setState({ todos: updatedTodos })
    }

    toggleCompletion = (id) => {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        })
        this.setState({ todos: updatedTodos })
    }

    render() {
        const todos = this.state.todos.map((todo) => (
            <Todo
                todo={todo.task}
                id={todo.id}
                key={todo.id}
                completed={todo.completed}
                removeTodo={this.remove}
                updateTodo={this.update}
                toggleTodo={this.toggleCompletion}
            />
        ))
        return (
            <div className='TodoList'>
                <h1>Todo List<span>A Simple React Todo List App</span></h1>
                <NewTodoForm createTodo={this.create} />
                <ul>{todos}</ul>
            </div>
        )
    }
}
