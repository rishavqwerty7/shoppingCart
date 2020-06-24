import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div style={{border:"1px solid black", display:"flex", flexDirection:'row', justifyContent:'space-Evenly'}}>
      <Link to="/">Home</Link>
      <br />
      <Link to="/cart">Cart</Link>
      <br />
      <Link to="/Products">Products</Link>
      <br />
      <Link to="/order">Order</Link>
      <br />
      <Link to="/Login">Login</Link>
    </div>
  )
}

export default Navbar
