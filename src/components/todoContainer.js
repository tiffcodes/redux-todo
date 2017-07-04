import { connect } from 'react-redux';
import { addtodo, deletetodo } from './actions/action.js';
import TodoForm from './TodoForm.js';

const mapStateToProps = (state) => {
	return {
		notes: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addtodo: (note) => {
			dispatch(addtodo(note));
		},
		deletetodo: (id) => {
			dispatch(deletetodo(id));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);