const initialState = [];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADDTODO':
			// let addState = Object.assign({}, state);
			return [
			        ...state,
			        {
			          id: action.id,
			          note: action.note,
			          completed: false
			        }
			];
		case 'DELETETODO': 
			return state.map(todo =>
		       (todo.id === action.id) ? {...todo, completed: !todo.completed}
		         : todo
			)
		default: 
			return state;
	}
}

export default reducer;