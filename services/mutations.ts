import { createTodo } from '@/lib/todos'
import { useMutation } from '@tanstack/react-query'

export const useCreateTodo = () =>
	useMutation({
		mutationKey: ['mutateTodos'],
		mutationFn: (data: Todo) => createTodo(data)
	})
