import { getProjects, getTodo, getTodosIds } from '@/lib/todos'
import { keepPreviousData, useQueries, useQuery } from '@tanstack/react-query'

export const useTodosIds = () => {
	return useQuery({
		queryKey: ['todos'],
		queryFn: getTodosIds
	})
}

export const useTodos = (ids: (number | undefined)[] | undefined) =>
	useQueries({
		queries: (ids ?? []).map((id) => {
			return {
				queryKey: ['todo', { id }],
				queryFn: () => getTodo(id!)
			}
		})
	})

export const useProjects = (page: number) => {
	return useQuery({
		queryKey: ['projects', { page }],
		queryFn: () => getProjects(page),
		placeholderData: keepPreviousData
	})
}
