'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const queryClient = new QueryClient({
	defaultOptions: { queries: { retry: 5, retryDelay: 1000 } }
})

const TanstackProvider = ({ children }: Props) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default TanstackProvider
