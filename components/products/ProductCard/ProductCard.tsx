import React from 'react'
import { Product } from '@common/types/products'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  product: Product
}

const placeHolderImage = '/img/product-image-placeholder.svg'

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
          <Image
            alt={product.name ?? 'Product image'}
            src={placeHolderImage}
            height={540}
            width={540}
            quality="85"
            layout="responsive"
          />
        )}
      </a>
    </Link>
  )
}

export default ProductCard
