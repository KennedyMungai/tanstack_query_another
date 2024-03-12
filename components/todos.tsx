'use client'

import { useCreateTodo } from '@/services/mutations'
import { useTodos, useTodosIds } from '@/services/todos'
import { SubmitHandler, useForm } from 'react-hook-form'

type Props = {}

const Todos = (props: Props) => {
	const {
		data: todoIdData,
		isPending: isTodoIdPending,
		isError: isTodoIdError
	} = useTodosIds()

	const todosQueries = useTodos(todoIdData)

	const createTodoMutation = useCreateTodo()

	const {} = useForm<Todo>()

	const handleCreateTodoSubmit: SubmitHandler<Todo> = (data: Todo) =>
		createTodoMutation.mutate(data)

	if (isTodoIdPending) return <span>...loading</span>

	if (isTodoIdError) return <span>There is an error</span>

	return (
		<div>
			<form
				action=''
				onSubmit={handleCreateTodoSubmit}
				className=''
			></form>
			<ul>
				{todosQueries.map(({ data }, index) => (
					<li key={data?.id}>
						<div className=''>Id: {data?.id}</div>
						<span>
							<strong>Title: {data?.title}</strong>
							<strong>Description: {data?.description}</strong>
						</span>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Todos
