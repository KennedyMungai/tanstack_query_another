'use client'

import { useProducts } from '@/services/todos'
import { Fragment, useState } from 'react'

type Props = {}

const Products = (props: Props) => {
	const productsQuery = useProducts()

	const [selectedProduct, setSelectedProduct] = useState<number | null>(null)

	return (
		<div>
			{productsQuery.data?.pages.map((group, index) => (
				<Fragment key={index}>
					{group.map((product) => (
						<Fragment key={product.id}>
							<button
								key={product.id}
								onClick={() => setSelectedProduct(product.id)}
							>
								{product.name}
							</button>
						</Fragment>
					))}
				</Fragment>
			))}
			<br />
			<div>
				<button
					onClick={() => productsQuery.fetchNextPage()}
					disabled={
						productsQuery.isFetching || !productsQuery.hasNextPage
					}
				>
					{productsQuery.isFetchingNextPage
						? 'Loading More'
						: productsQuery.hasNextPage
						? 'Load More'
						: ''}
				</button>
			</div>
		</div>
	)
}

export default Products
