import React, { useState } from 'react'
import Iproduct from '../interface'

const productForm: Iproduct = {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
}

type CreateProductType = {
  onCreate: (prod: Iproduct) => void
}

export default function CreateProduct({ onCreate }: CreateProductType) {
  const [value, setValue] = useState('')
  const [error, seterror] = useState('')

  async function submitHanler(e: React.FormEvent) {
    e.preventDefault()
    seterror('')
    if (value.trim().length === 0) {
      seterror('Please enter valid title')
      return
    }

    const response = await fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify({ ...productForm, title: value }),
    })
    const answer: Iproduct = await response.json()

    setValue('')
    onCreate(answer)
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return (
    <form onSubmit={submitHanler}>
      <input
        value={value}
        type="text"
        className="border py-2 px-4 mb-2 outline-0 w-full"
        placeholder="Enter product title..."
        onChange={changeHandler}
      />
      {error && <div className="text-red-500 text-center">{error}</div>}
      <button
        type="submit"
        className="hover:text-white py-2 px-4 mt-2 border bg-yellow-400"
      >
        Create
      </button>
    </form>
  )
}
