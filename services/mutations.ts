import { createTodo } from '@/lib/todos'
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
