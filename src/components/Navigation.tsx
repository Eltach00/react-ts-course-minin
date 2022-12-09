import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="h-[50px] flex justify-between px-5 bg-gray-500 text-white items-center ">
      <span className="fontbold">React 2022</span>
      <span>
        <Link className="mr-3" to="/">
          Products
        </Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
  )
}
