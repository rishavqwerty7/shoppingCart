import React from "react"

function Product(props) {
  const { data, match, history } = props
  const item = data.find((item) => item.id === Number(match.params.id))
  console.log(item)
  if (!item) {
    return <h3>Error product not found</h3>
  }

  const handleClick = () => {
    props.addToCart(item)
    history.push("/cart")
  }
  return (
    <div>
      Product Details
      <div>{item.name}</div>
      <div>{item.price}</div>
      <button onClick={handleClick}>Add to cart</button>
    </div>
  )
}
export default Product
