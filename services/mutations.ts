import { createTodo, deleteTodo, updateTodo } from '@/lib/todos'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateTodo = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['mutateTodos'],
		mutationFn: (data: Todo) => createTodo(data),
		onMutate: () => console.log('mutating'),
		onError: (error, variables, context) => console.log(error),
		onSuccess: async (data, variables, context) =>
			await queryClient.invalidateQueries({ queryKey: ['todos'] }),
		onSettled: (data, error, variables, context) => console.log('Settled')
	})
}

export const useUpdateTodo = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['updateTodo'],
		mutationFn: (data: Todo) => updateTodo(data),
		onSettled: async (_, error, variables) => {
			if (error) {
				console.log(error.message)
			} else {
				await queryClient.invalidateQueries({ queryKey: ['todos'] })
				await queryClient.invalidateQueries({
					queryKey: ['todo', { id: variables.id }]
				})
			}
		}
	})
}

export const useDeleteTodo = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: async (id: number) => await deleteTodo(id),
		onSuccess: () => console.log('Deleted Todo successfully'),
		onSettled: async (_, error) => {
			if (error) {
				console.log(error.message)
			} else {
				queryClient.invalidateQueries({ queryKey: ['todos'] })
			}
		}
	})
}
