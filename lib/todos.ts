import axios from 'axios'

export const getTodosIds = async () =>
	await axios
		.get('http://localhost:3001/todos')
		.then((res) => res.data.map((todo: Todo) => todo.id))

export const getTodo = async (id: number) =>
	await axios
		.get(`http://localhost:3001/todos?id=${id}`)
		.then((res) => res.data)

export const createTodo = async (data: Todo) =>
	await axios.post('http://localhost:3001/todos', data)

export const updateTodo = async (data: Todo) =>
	await axios.put(`http://localhost:3001/todos/${data.id}`, data)

export const deleteTodo = async (id: number) =>
	await axios.delete(`http://localhost:3001/todos/${id}`)

export const getProjects = async (page: number = 1) =>
	await axios
		.get(`http://localhost:3001/projects?page=${page}&limit=3`)
		.then((res) => res.data as Project[])

export const getProducts = async ({ pageParam }: { pageParam: number }) =>
	await axios
		.get(`http://localhost:3001/products?page=${pageParam + 1}&limit=3`)
		.then((res) => res.data as Product[])

export const getProduct = async (id: number) =>
	await axios
		.get(`http://localhost:3001/products/${id}`)
		.then((res) => res.data as Product)
