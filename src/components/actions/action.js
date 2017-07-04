let id = 0;

export const addtodo = (note) => {
	return {
		type: 'ADDTODO',
		note: note,
		id: id++,
	}
};

export const deletetodo = (id) => {
	return {
		type: 'DELETETODO',
		id: id,
	}
};

