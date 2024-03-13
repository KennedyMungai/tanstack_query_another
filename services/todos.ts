import { getTodo, getTodosIds } from '@/lib/todos'
import { useQueries, useQuery } from '@tanstack/react-query'

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
