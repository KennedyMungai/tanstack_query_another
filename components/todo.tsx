'use client'

import { useTodos, useTodosIds } from '@/services/todos'

type Props = {}

const Todo = (props: Props) => {
	const {
		data: todoIdData,
		isPending: isTodoIdPending,
		isError: isTodoIdError
	} = useTodosIds()

	const todosQueries = useTodos(todoIdData)

	if (isTodoIdPending) return <span>...loading</span>

	if (isTodoIdError) return <span>There is an error</span>

	return (
		<div>
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

export default Todo
