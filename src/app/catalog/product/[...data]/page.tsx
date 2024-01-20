import { AddToCartButton } from '../add-to-cart-button'

interface IProductProps {
  params: {
    data: string[]
  }
}

export default async function Product({ params }: IProductProps) {
  const response = await fetch('https://api.github.com/users/jandersonvb')

  const user = await response.json()

  const [productId, size, color] = params.data

  return (
    <div>
      <h1>Product {productId}</h1>
      <h2>Size: {size}</h2>
      <h2>Color: {color}</h2>

      <AddToCartButton />
    </div>
  )
}
