import { useEffect, useState } from 'react'
import Product from './components/Product'
import Iproduct from './interface'

function App() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorFetch, seterrorFetch] = useState('')

  async function fetchData() {
    try {
      setIsLoading(true)
      const response = await fetch('https://fakestoreapi.com/products?limit=5')
      const data = await response.json()
      setData(data)
      setIsLoading(false)
    } catch (e: any) {
      setIsLoading(false)
      seterrorFetch(e.message)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {errorFetch && (
        <div className="text-center text-5xl font-bold text-red-600">
          {errorFetch}
        </div>
      )}
      {isLoading && (
        <div className="text-center text-5xl font-bold">Loading...</div>
      )}
      {data.length &&
        data.map((product: Iproduct) => (
          <Product product={product} key={product.id} />
        ))}
    </div>
  )
}

export default App
