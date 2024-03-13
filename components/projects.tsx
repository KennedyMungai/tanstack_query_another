'use client'

import { useProjects } from '@/services/todos'
import { useState } from 'react'

type Props = {}

const Projects = (props: Props) => {
	const [page, setPage] = useState(1)

	const { data, isPending, isError, error, isPlaceholderData, isFetching } =
		useProjects(page)

	return (
		<div>
			{isPending ? (
				<div>loading...</div>
			) : isError ? (
				<div>{error.message}</div>
			) : (
				<div>
					{data.map((project) => (
						<div key={project.id}>{project.name}</div>
					))}
				</div>
			)}
		</div>
	)
}

export default Projects
