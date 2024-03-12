'use client'

import { useTodosIds } from '@/services/todos'
import { useIsFetching } from '@tanstack/react-query'

type Props = {}

const Todo = (props: Props) => {
	// const isFetching = useIsFetching()

	const { error, data, isPending, isError, fetchStatus, status } =
		useTodosIds()

	if (isPending) return <span>...loading</span>

	if (isError) return <span>There is an error</span>

	return (
		<>
			{/* <p>Query Function Status: {fetchStatus}</p> */}
			{/* <p>Query Data Status: {status}</p> */}
			{/* <p>Global isFetching: {isFetching}</p> */}
			<div>
				{data.map((todoId: number) => (
					<p key={todoId} className='text-white'>
						id: {todoId}
					</p>
				))}
			</div>
		</>
	)
}

export default Todo
