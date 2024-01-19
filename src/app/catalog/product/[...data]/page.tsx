'use client'

interface IProductProps {
  params: {
    data: string[]
  }
}

export default function Product({ params }: IProductProps) {
  const [productId, size, color] = params.data

  console.log(params)

  function AddToCart() {
    console.log('Add to cart')
  }

  return (
    <div>
      <h1>Product {productId}</h1>
      <h2>Size: {size}</h2>
      <h2>Color: {color}</h2>
      <button onClick={AddToCart}>Enviar para o carrinho</button>
    </div>
  )
}
