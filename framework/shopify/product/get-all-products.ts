import getAllProductsQuery from '../utils/queries/get-all-queries'
import fetchApi from '../utils/fetch-api'
import { ProductConnection } from '../schema'

type ReturnType = {
  products: ProductConnection
}

const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchApi<ReturnType>({
    query: getAllProductsQuery,
  })

  const products =
    data.products.edges.map(({ node: product }) => {
      return product
    }) ?? []

  return products
}

export default getAllProducts
