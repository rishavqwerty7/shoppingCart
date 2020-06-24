import React, { useContext } from "react"

function SingleCart(props) {
  const { data } = props
  console.log("hi")
  return (
    <div
      style={{
        border: "1px solid green",
        display: "flex",
        flexDirection: "column",
        margin: "1rem 0",
        width: "18rem",
      }}
    >
      <img src={data.src} alt={data.name} width="100" height="100" />
      <label>{data.name}</label>
      <label>{data.price}</label>
      <label>{data.id}</label>
    </div>
  )
}

export default SingleCart
