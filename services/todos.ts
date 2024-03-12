import { getTodoIds } from '@/lib/todos'
import { useQuery } from '@tanstack/react-query'

export const useTodosIds = () => {
	return useQuery({
		queryKey: ['todos'],
		queryFn: getTodoIds
	})
}
