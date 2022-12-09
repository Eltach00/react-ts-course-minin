import { useEffect, useState } from 'react'
import Iproduct from '../interface'

export default function useProducts() {
  const [data, setData] = useState<Iproduct[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorFetch, seterrorFetch] = useState('')

  function addProduct(product: Iproduct) {
    setData((prev) => [...prev, product])
  }

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
  return {
    data,
    errorFetch,
    isLoading,
    addProduct,
  }
}
