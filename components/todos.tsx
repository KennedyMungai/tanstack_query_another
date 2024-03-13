'use client'

import { useCreateTodo, useUpdateTodo } from '@/services/mutations'
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

	const updateTodoMutation = useUpdateTodo()

	const { register, handleSubmit } = useForm<Todo>()

	const handleCreateTodoSubmit: SubmitHandler<Todo> = (data: Todo) =>
		createTodoMutation.mutate(data)

	const handleMarkAsDoneSubmit: SubmitHandler<Todo> = (data: Todo) => {
		if (data) {
			updateTodoMutation.mutate({ ...data, checked: true })
		}
	}

	if (isTodoIdPending) return <span>...loading</span>

	if (isTodoIdError) return <span>There is an error</span>

	return (
		<div>
			<form action='' onSubmit={handleSubmit(handleCreateTodoSubmit)}>
				<h4>New Todo</h4>
				<input type='text' placeholder='Title' {...register('title')} />
				<br />
				<input
					type='text'
					placeholder='Description'
					{...register('description')}
				/>
				<br />
				<button type='submit' disabled={createTodoMutation.isPending}>
					{createTodoMutation.isPending
						? 'Submitting...'
						: 'Submit Query'}
				</button>
				<br />
			</form>
			<ul>
				{todosQueries.map(({ data }, index) => (
					<li key={data?.id}>
						<div className=''>Id: {data?.id}</div>
						<span>
							<strong>Title: {data?.title}</strong>
							<strong>Description: {data?.description}</strong>
						</span>
						<div>
							<button
								onClick={() => handleMarkAsDoneSubmit(data)}
							>
								{data.checked ? 'Done' : 'Mark as done'}
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Todos
