import { useContext } from 'react'
import CreateProduct from '../components/CreateProduct'
import Modal from '../components/Modal'
import Product from '../components/Product'
import { ModalContext } from '../context/ModalContext'
import useProducts from '../hooks/useProducts'
import Iproduct from '../interface'

export default function ProductsPage() {
  const { errorFetch, data, isLoading, addProduct } = useProducts()
  const { modal, open, close } = useContext(ModalContext)
  const handleCreate = (prod: Iproduct) => {
    addProduct(prod)
    close()
  }
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <button
        onClick={open}
        className="hover:text-white py-3 px-5 border bg-yellow-400 fixed right-5 bottom-5 rounded-full"
      >
        +
      </button>
      {errorFetch && (
        <div className="text-center text-5xl font-bold text-red-600">
          {errorFetch}
        </div>
      )}
      {isLoading && (
        <div className="text-center text-5xl font-bold">Loading...</div>
      )}
      {!!data.length &&
        data.map((product: Iproduct) => (
          <Product product={product} key={product.id} />
        ))}
      {modal && (
        <Modal title="Create New Product" onClose={close}>
          <CreateProduct onCreate={handleCreate} />
        </Modal>
      )}
    </div>
  )
}
