import axios from 'axios'

export const getTodosIds = async () =>
	await axios
		.get('http://localhost:3001/todos')
		.then((res) => res.data.map((todo: Todo) => todo.id))

export const getTodo = async (id: number) =>
	await axios
		.get(`http://localhost:3001/todos?id=${id}`)
		.then((res) => res.data)
