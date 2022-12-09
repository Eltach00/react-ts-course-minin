import { useState } from 'react'
import Iproduct from '../interface'

type PropductProps = {
  product: Iproduct
}

export default function Product({ product }: PropductProps) {
  const [details, setDetails] = useState(false)
  const btnClassName: string = details ? 'bg-yellow-400' : 'bg-blue-400'
  const btnClasses: Array<string> = ['py-2 px-4 mt-2 border', btnClassName]
  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      {product.title}
      <img className="w-1/5" src={product.image} alt={product.title} />
      <p className="font-bold">{product.price}</p>
      <button
        className={btnClasses.join(' ')}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? 'Hide Details' : 'Show Details'}
      </button>
      {details && (
        <div>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  )
}
