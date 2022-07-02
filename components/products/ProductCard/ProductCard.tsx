import React from 'react'
import { Product } from '@common/types/products'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  product: Product
}

const placeHolderImage = '/images/product-image-placeholder.svg'

const ProductCard: React.FunctionComponent<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a>
        <div>
          <h3>
            <span>{product.name}</span>
          </h3>
          <span>14 $</span>
        </div>
        {product.images && (
          <img
            className="w-full"
            alt={product.name ?? 'Product image'}
            src={product.images[0].url ?? placeHolderImage}
          />
        )}
      </a>
    </Link>
  )
}

export default ProductCard
