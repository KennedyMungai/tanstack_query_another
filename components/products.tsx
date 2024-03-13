'use client'

import { useProduct, useProducts } from '@/services/todos'
import { Fragment, useState } from 'react'

type Props = {}

const Products = (props: Props) => {
	const [selectedProductId, setSelectedProductId] = useState<number | null>(
		null
	)

	const productsQuery = useProducts()
	const productQuery = useProduct(selectedProductId)

	return (
		<div>
			{productsQuery.data?.pages.map((group, index) => (
				<Fragment key={index}>
					{group.map((product) => (
						<Fragment key={product.id}>
							<button
								key={product.id}
								onClick={() => setSelectedProductId(product.id)}
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
			<div>Selected Product: {JSON.stringify(productQuery.data)}</div>
		</div>
	)
}

export default Products
