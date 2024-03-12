import TanstackProvider from '@/providers/tanstack-provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Tanstack Query Another',
	description: 'Yet another tanstack query application'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<TanstackProvider>
				<body className={inter.className}>{children}</body>
			</TanstackProvider>
		</html>
	)
}
