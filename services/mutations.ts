import { createTodo } from '@/lib/todos'
import { useMutation } from '@tanstack/react-query'

export const useCreateTodo = () =>
	useMutation({
		mutationKey: ['mutateTodos'],
		mutationFn: (data: Todo) => createTodo(data),
		onMutate: () => console.log('mutating'),
		onError: (error, variables, context) => console.log(error),
		onSuccess: (data, variables, context) => console.log(data),
		onSettled: (data, error, variables, context) => console.log('Settled')
	})
