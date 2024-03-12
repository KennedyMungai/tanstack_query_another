import axios from 'axios'

export const getTodos = async () =>
	await axios
		.get('http://localhost:3001/todos')
		.then((res) => res.data.map((todo: Todo) => todo.id))
