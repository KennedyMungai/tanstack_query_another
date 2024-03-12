'use client'

import { useTodosIds } from '@/services/todos'

type Props = {}

const Todo = (props: Props) => {
	const { error, data, isPending, isError, fetchStatus, status } =
		useTodosIds()

	if (isPending) return <span>...loading</span>

	if (isError) return <span>There is an error</span>

	return (
		<div>
			{data.map((todoId: number) => (
				<p key={todoId} className='text-white'>
					id: {todoId}
				</p>
			))}
		</div>
	)
}

export default Todo
