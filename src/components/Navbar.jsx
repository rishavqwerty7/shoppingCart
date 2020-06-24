import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/Products">Products</Link>
      <br />
      <Link to="/Login">Login</Link>
    </div>
  )
}

export default Navbar
