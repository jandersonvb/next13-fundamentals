interface IProductProps {
  params: {
    data: string[]
  }
}

export default function Product({ params }: IProductProps) {
  const [productId, size, color] = params.data
  return (
    <div>
      <h1>Product {productId}</h1>
      <h2>Size: {size}</h2>
      <h2>Color: {color}</h2>
    </div>
  )
}
