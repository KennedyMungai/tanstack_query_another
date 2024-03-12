import { getTodosIds } from '@/lib/todos'
import { useQuery } from '@tanstack/react-query'

export const useTodosIds = () => {
	return useQuery({
		queryKey: ['todos'],
		queryFn: getTodosIds
	})
}
