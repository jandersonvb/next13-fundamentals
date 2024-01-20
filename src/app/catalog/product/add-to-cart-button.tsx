'use client'

import { useState } from 'react'

export function AddToCartButton() {
  const [count, setCount] = useState(0)

  function AddToCart() {
    setCount((state) => state + 1)
  }

  return <button onClick={AddToCart}>Enviar para o carrinho. ({count})</button>
}
