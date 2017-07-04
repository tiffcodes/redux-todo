import React from 'react';

const ToDoList = (props) => {
	return (
		<div>
			<h1>To Do List:</h1>
			{props.notes.map((note, i) => {
				return (
					<li key={`note-${i}`} className={note.completed ? 'completed' : 'notCompleted'}>
						<p>{note.note}</p>
						<button onClick={(e) => props.handleDelete(note.id)}><i className="fa fa-times">x</i></button>
					</li>
				)
			})}
		</div>
	)
}

export default ToDoList;