import React from 'react';
import ToDoList from './Todolist.js'

class TodoForm extends React.Component {
	constructor(props) {
		super();
		this.state = {
			todoInput: '',
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.addtodo(this.state.todoInput);
		this.setState({
			todoInput: '',
		})
	}

	handleDelete(id) {
		this.props.deletetodo(id);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="todoInput">To do:</label>
					<input 
						id="todoInput"
						type="text"
						value={this.state.todoInput}
						name="todoInput"
						onChange={this.handleChange}
					/>
					<button type="submit">Add to do</button>
				</form>
				<ToDoList handleDelete={this.handleDelete} notes={this.props.notes} />
			</div>
		)
	}
}


export default TodoForm;