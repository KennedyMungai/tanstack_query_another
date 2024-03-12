'use client'

import { useTodosIds } from '@/services/todos'

type Props = {}

const Todo = (props: Props) => {
	const { error, data, isPending, isError, fetchStatus, status } =
		useTodosIds()

	if (isPending) return <span>...loading</span>

	if (isError) return <span>There is an error</span>

	console.log(data)

	return (
		<>
			<p>Query Function Status: {fetchStatus}</p>
			<p>Query Data Status: {status}</p>
			<div>
				{data.map((todoId: number) => (
					<p key={todoId} className='text-white'>
						{todoId}
					</p>
				))}
			</div>
		</>
	)
}

export default Todo
