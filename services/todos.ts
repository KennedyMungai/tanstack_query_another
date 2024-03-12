import { getTodoIds } from '@/lib/todos'
import { useQuery } from '@tanstack/react-query'

const useTodosIds = () => {
	return useQuery({
		queryKey: ['todos'],
		queryFn: getTodoIds,
		refetchOnWindowFocus: false
	})
}
