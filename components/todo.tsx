'use client'

import { useTodosIds } from '@/services/todos'

type Props = {}

const Todo = (props: Props) => {
	const { error, data, isPending, isError } = useTodosIds()

	if (isPending) return <span>...loading</span>

	if (isError) return <span>There is an error</span>

	console.log(data)

	return (
		<div>
			{data.map((todoId) => (
				<p key={todoId} className='text-white'>
					{todoId}
				</p>
			))}
		</div>
	)
}

export default Todo
