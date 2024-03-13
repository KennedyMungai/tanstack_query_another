import { getProducts, getProjects, getTodo, getTodosIds } from '@/lib/todos'
import {
	keepPreviousData,
	useInfiniteQuery,
	useQueries,
	useQuery
} from '@tanstack/react-query'

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

export const useProjects = (page: number) =>
	useQuery({
		queryKey: ['projects', { page }],
		queryFn: () => getProjects(page),
		placeholderData: keepPreviousData
	})

export const useProducts = () =>
	useInfiniteQuery({
		queryKey: ['products'],
		queryFn: getProducts,
		initialPageParam: 0,
		getNextPageParam: (lastPage, allPages, lastPageParam) => {
			if (lastPage.length === 0) {
				return undefined
			}

			return lastPageParam + 1
		},
		getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
			if (firstPage.length <= 0) {
				return undefined
			}

			return firstPageParam - 1
		}
	})
